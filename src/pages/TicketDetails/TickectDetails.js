import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const TicketDetails = () => {
    const { id } = useParams()

    const [ticket, setTicket] = useState({})

    useEffect(() => {
        const url = "https://api.tvmaze.com/search/shows?q=all"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const singleItem = data.find(item => item.show.id === parseInt(id))
                    setTicket(singleItem)
                    console.log(singleItem)
                }
            });
    }, [])


    return (
        <div>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={ticket} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{ticket.show.name}</h5>
                            <p class="card-text">{ticket.show.summary}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketDetails;