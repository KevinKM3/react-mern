import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateShoe extends Component {

    constructor(props) {
        super(props)
        
        // Setting up the functions
        this.onChangeShoeName = this.onChangeShoeName.bind(this);
        this.onChangeShoeEmail = this.onChangeShoeEmail.bind(this);
        this.onChangeShoeId = this.onChangeShoeId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up State
        this.state = {
            name: '',
            email: '',
            id: ''
        }
    }

    onChangeShoeName(e) {
        this.setState({name: e.target.value})
    }
    onChangeShoeEmail(e) {
        this.setState({email: e.target.value})
    }
    onChangeShoeId(e) {
        this.setState({id: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const shoeObject = {
        name: this.state.name,
        email: this.state.email,
        id: this.state.id
        };

axios.post('http://localhost:4000/shoes/create-shoe', shoeObject.then(res => console.log(res.data));

        this.setState({name: '', email: '', id: ''})
    }

    render() {
        return (<div class="form-wrapper">
        <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeShoeName}/>
        </Form.Group>

        <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.onChangeShoeEmail}/>
        </Form.Group>

        <Form.Group controlId="Name">
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" value={this.state.id} onChange={this.onChangeShoeId}/>
        </Form.Group>

    <Button variant="danger" size="lg" block="block" type="submit">
    Create Shoe Style
    </Button>

        </Form>
        </div>);
    }
}
    