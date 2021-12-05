import {Title, Form, Card, Subtitle, Button} from 'react-bootstrap';
import React from "react"

export default function registerTurf(){
    return(
    <>
    <Title>Register Turf</Title>
    <Subtitle>Register in your turf on our DB</Subtitle>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Turf</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Turf Owner Email</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
                People who want to use this turf can use it by contacting your email
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Turf Details</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
    </Form>
    </>
    )
}