import React, { Component } from 'react';
import './App.css';
import Route from 'react-router-dom/Route';
import { Form, Button } from 'react-bootstrap'


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.history.push('/Messages')
    }

    render() {


        return (
            <div className="App">
                <Route path="/" strict render={
                    () => {
                        return (
                            <Form onSubmit={(e) => this.handleSubmit(e)} className="App">
                                <h1>Tupsy</h1>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
            </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Submit
          </Button>
                            </Form>
                        )
                    }
                }
                />


            </div>



        );


    }
}

export default login;