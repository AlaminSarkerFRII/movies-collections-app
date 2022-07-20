
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Ticket.css"

const Ticket = ({ ticket }) => {
    const navigate = useNavigate()
    const { id, title,price,description,image } = ticket

    
    
    const handleTickectDetails = () => {
        navigate(`/ticket/${id}`)
        // console.log(ticket)
    }
    return (
        <>
            <div className="col">
                <Card className="p-4 text-center">
                    <Card.Img style={{width:"200px", height:"200px"}} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <h5>Price : {price}$</h5>

                        <Card.Text  className='text-md-start'>
                           {description.substring(0, 150)}                
                        </Card.Text>
                        <Button onClick={handleTickectDetails} variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default Ticket;