
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Ticket.css"

const Ticket = ({ ticket }) => {

    const navigate = useNavigate()
    const { id, name, type, language, url, image, averageRuntime, summary } = ticket.show
    
    const handleTickectDetails = () => {
        navigate(`/ticket/${id}`)
        // console.log(ticket)
    }
    return (
        <div className="">
            <div className="col">
                <Card >
                    <Card.Img variant="top" src={image.medium} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button onClick={handleTickectDetails} variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Ticket;