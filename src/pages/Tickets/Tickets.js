import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Ticket from '../Ticket/Ticket';
import './Tickets.css'

const Tickets = () => {

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        const url = "https://fakestoreapi.com/products"
        fetch(url)
            .then(response => response.json())
            .then(data => setTickets(data));
    }, [])

    return (
        <div className="container">
            <h2>Products {tickets.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                tickets.map((ticket) => <Ticket 
                ticket={ticket}
                 key={ticket.id}>
                </Ticket>)
            }
            </Row>

        </div>
    );
};

export default Tickets;