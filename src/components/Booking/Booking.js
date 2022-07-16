
import React from 'react';
import { Form ,Button} from 'react-bootstrap';

const Booking = () => {
    return (
        <div className="container">
            <Form className="form-container" style={{ maxWidth: "500px", margin: "10px auto" }}>
                <Form.Group className="mb-3 text-center" controlId="formBasicTicket">
                    <Form.Label>Booking For : </Form.Label>
                    <Form.Control type="text" placeholder="Booking" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                    Add Booking
                </Button>
            </Form>
        </div>
    );
};

export default Booking;