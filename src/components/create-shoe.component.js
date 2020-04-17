import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateShoe extends Component {
    render() {
        return (<div class="form-wrapper">
        <Form>
        <Form.Group controlId="Name">
            <Form.Label>Shoe-Name</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
        </Form.Group>

        <Form.Group controlId="Name">
            <Form.Label>Id No</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>

<Button variant="danger" size="lg" block="block" type="submit">
Create Shoe Style
</Button>

        </Form>
        </div>);
    }
}
    