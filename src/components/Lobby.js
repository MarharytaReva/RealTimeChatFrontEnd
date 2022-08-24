import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

const Lobby = ({ joinRoom }) => {
    const [user, setUser] = useState();
    const [room, setRoom] = useState()

    return (
        <div className='container'>
            <div className='text-center mx-auto lobbyDiv'>
                
                
                    <h2 className='color-lg'>MyChat</h2>
                    <hr className='line' />
                    <Form className='lobby'
                        onSubmit={e => {
                            e.preventDefault();
                            joinRoom(user, room);
                        }}>
                        <Form.Group>
                            <Form.Control placeholder='name' onChange={e => setUser(e.target.value)} />
                            <Form.Control placeholder='room' onChange={e => setRoom(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" disabled={!user || !room}>Join</Button>
                    </Form>
                
                
            </div>

        </div>)
}

export default Lobby;