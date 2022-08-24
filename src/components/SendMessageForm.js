import { useState } from "react";
import { InputGroup, Form, FormControl, Button } from "react-bootstrap"

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return <Form onSubmit={e => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    }}>
        <InputGroup>
            <FormControl placeholder="message..." 
            as="textarea" rows={3}
            onChange={e => setMessage(e.target.value)} value={message}/>

            <InputGroup>
                <Button variant="primary" id="send-btn" type='submit' disabled={!message}>Send</Button>
            </InputGroup>
        </InputGroup>
    </Form>
}

export default SendMessageForm;