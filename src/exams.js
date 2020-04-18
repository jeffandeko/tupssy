import React, { Component } from 'react';
import { Table, Col, Form, Button, Row } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa'
import { appApi } from './Functions'


class ExamRooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            room: '',
            capacity: 0


        }
    }
    submit(e) {
        e.preventDefault();
        var room = {}, data = new FormData(e.target);
        data.forEach((value, key) => room[key] = value)
        appApi({
            action: 'addRoom',
            room
        })

    }
    render() {
        const cols = ["Exam Room", " Room Capacity"]
        const { rooms, room, capacity } = this.state
        return (
            <Col>
                <Row>
                    <Col md={6}>

                        <Form onSubmit={(e) => this.submit(e)}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Exam Room</Form.Label>
                                    <Form.Control type={"text"} placeholder={"type room here..."}
                                        required varient="success" size="sm" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Room Capacity</Form.Label>
                                    <Form.Control type={"number"} placeholder="capacity" required size='sm' />
                                </Form.Group>

                            </Form.Row>
                            <Button style={{ fontSize: 15, marginTop: 10, marginBottom: 10 }}
                                variant="outline-success" type="submit" size="sm" onClick={() =>
                                    this.setState({
                                        rooms: [...this.state.rooms, { room, capacity }],

                                    })} >
                                <FaPlus />Add Room</Button>
                        </Form>
                    </Col>
                </Row>

                <Table stripped bordered hover size="sm">
                    <thead>
                        <tr>
                            {
                                cols.map((col, index) => (
                                    <th key={index}>{col}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    {
                        rooms.map((room, index) => (
                            <tr key={index} style={{ fontSize: 15, textAlign: "center" }}>
                                <td>{room.room}</td>
                                <td>{room.capacity}</td>


                            </tr>
                        ))
                    }

                </Table>

            </Col>
        );
    }
}

export default ExamRooms;