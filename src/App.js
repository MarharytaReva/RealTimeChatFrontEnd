import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Lobby from './components/Lobby';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useState } from 'react';
import Chat from './components/Chat';

const App = () => {
  const [connectionState, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const joinRoom = async (user, room) => {
    try{
      const connection = new HubConnectionBuilder() //create connection
      .withUrl("https://myrealtimechatapi.azurewebsites.net")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("ReceiveMessage", (user, message) => { // setup handlers
        setMessages(messages => [...messages, { user, message }]);
      });

      connection.onclose(e => {
        setConnection();
        setMessages([]);
        setUsers([]);
      })

      connection.on("UsersInRoom", (users) => {
        console.log(users)
        setUsers(users);
      });

      await connection.start(); //start connection

      await connection.invoke("JoinRoom", {user, room}); // invoke JoinRoom method

      setConnection(connection)
    } catch(e){
      console.log(e);
    }
  }

  const sendMessage = async (message) => {
      try{
        await connectionState.invoke("SendMessage", message);

      } catch(e){
        console.log(e);
      }
  }

  const closeConnection = async () => {
    try{
      await connectionState.stop();
    } catch(e){
      console.log(e);
    }
  }
  return <div className='app'>
    
    {!connectionState
      ? <Lobby joinRoom={joinRoom}></Lobby>
      : <Chat messages={messages} sendMessage={sendMessage} 
                      closeConnection={closeConnection}
                      users={users} />
    }
    
  </div>
}

export default App;
