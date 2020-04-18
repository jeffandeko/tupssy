import React, { Component } from 'react';
import { Form, } from 'react-bootstrap';


class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{ id: 1, text: '' }, { id: 2, text: '' }],
            name: '',
            time: 0,
            text: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            messages: [...this.state.messages, { text: '' }]
        })

    }
    render() {
        const { messages } = this.state
        const messageBody = (message, index) =>
            <ul key={index}>

                <li>{message.text}</li>


            </ul>
        return (
            <div className="Messages-list">
                <Form onSubmit={(e) => this.handleSubmit(e)} className="App">
                    <Form.Label>Chat Room</Form.Label>
                    <ol>
                        {messages.map(messageBody)}
                    </ol>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control as="textarea" placeholder="Type your mesaage here" required
                            onChange={(client) => this.setState({ text: client.target.value })} />

                    </Form.Group>


                    <input variant="primary" type="submit" />


                </Form>


            </div>
        );
    }
}

export default Messages;