import React, { Component } from 'react';
import { Table, Col, Form, Button, Row } from 'react-bootstrap';
import { FaPlus, FaPen } from 'react-icons/fa'
import { appApi } from './Functions'


class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            room: {}

        }
    }
    componentDidMount() {
        appApi({
            action: 'getExam'
        }).then(exam => this.setState({ rooms: exam.rooms })).catch(e => alert(e))
    }
    submit(e) {
        e.preventDefault();
        var room = {}, data = new FormData(e.target);
        data.forEach((value, key) => room[key] = key === 'capacity' ? parseInt(value) : value)
        appApi({
            action: this.state.room.name ? 'updateRoom' : 'addRoom',
            room,
            oldName: this.state.room.name
        }).then(() => {
            this.refs.form.reset();
            var rooms = [...this.state.rooms];

            if (this.state.room.name) {
                var position = this.state.rooms.findIndex((rm) => rm = this.state.room.name)
                rooms[position] = room;
            }

            this.setState({ rooms: this.state.room.name ? rooms : [...this.state.rooms, room], room: {} })
        }).catch(e => alert(e))

    }
    render() {
        const cols = ["Exam Room", " Room Capacity", "Action"]
        const { rooms, room } = this.state
        return (
            <Col>
                <Row>
                    <Col md={6}>

                        <Form ref="form" onSubmit={(e) => this.submit(e)}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Exam Room</Form.Label>
                                    <Form.Control name="name" type={"text"} defaultValue={room.name} placeholder={"type room here..."}
                                        required varient="success" size="sm" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Room Capacity</Form.Label>
                                    <Form.Control name="capacity" defaultValue={room.capacity} type={"number"} placeholder="capacity" required size='sm' />
                                </Form.Group>
                            </Form.Row>
                            <Button style={{ fontSize: 13, marginTop: 10, marginBottom: 10 }}
                                variant="outline-success" type="submit" size="sm" >
                                {room.name ? <FaPen /> : <FaPlus />} {room.name ? 'Update' : 'Add'} Room</Button>
                        </Form>
                    </Col>
                </Row>

                <Table stripped bordered hover size="sm">
                    <thead>
                        <tr>
                            {
                                cols.map((col, index) => (
                                    <th style={{ textAlign: "center" }} key={index}>{col}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms.map((room, pos) => (
                                <tr key={pos} style={{ fontSize: 15, textAlign: "center" }}>
                                    <td style={{ verticalAlign: 'middle' }}>{room.name}</td>
                                    <td style={{ verticalAlign: 'middle' }}>{room.capacity}</td>
                                    <td style={{ verticalAlign: "middle", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <Button style={{ fontSize: 12, marginBottom: 5, height: 30, width: "110" }} variant="info" size="sm"
                                            onClick={() => {
                                                this.refs.form.reset();
                                                this.setState({ room: {} })
                                                setTimeout(() => this.setState({ room }), 10)

                                            }}>update</Button>
                                        <Button style={{ fontSize: 12, marginBottom: 5, height: 30, width: "110" }} variant="danger" size="sm"
                                            onClick={() => appApi({
                                                action: 'deleteRoom',
                                                room
                                            }).then(() => this.setState({ rooms: rooms.filter((room, index) => index !== pos) }))}>Delete</Button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>

                </Table>

            </Col>
        );
    }
}

export default Rooms;