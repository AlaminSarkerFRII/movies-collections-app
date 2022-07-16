
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Login.css"



const Login = () => {

    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        fetch("userData.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className="container">
            <Form className="form-container" style={{ maxWidth: "500px", margin: "10px auto" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;