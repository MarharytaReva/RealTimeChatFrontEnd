import { Button } from "react-bootstrap";
import ConnectedUsers from "./ConnectedUsers";
import HorizontalConnectedUsers from "./HorizontalConnectedUsers";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";

const Chat = ({ messages, sendMessage, closeConnection, users }) => <div>
    <h2 className='color-lg'>Chat Room</h2>
    <hr className='line' />

    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-sm-12 col-md-12">
                <div className="leave-room">
                    <Button variant="danger" className="leave-btn"
                        onClick={() => closeConnection()}>Leave Room</Button>
                </div>

                <div className='chat'>
                    <MessageContainer messages={messages} />

                    <SendMessageForm sendMessage={sendMessage} />
                </div>

            </div>

            <div className="col-4 d-none d-lg-block">
                    <ConnectedUsers users={users} />
            </div>
        </div>
    </div>

    <div className="container d-none d-sm-block d-md-block d-lg-none mt-4">
        <HorizontalConnectedUsers users={users}/>
    </div>


   
</div>

export default Chat