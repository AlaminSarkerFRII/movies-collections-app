import React, { useEffect, useState } from 'react';
import {useParams } from "react-router-dom"

const TicketDetails = () => {
    const { id } = useParams()
    const [tickets, setTickets] = useState({})
    const { name, summary, image, url } = tickets.show.show;
    console.log(tickets.show, "buying")

    useEffect(() => {
        const url = "https://api.tvmaze.com/search/shows?q=all"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const singleItem = data.find(item => item.show.id === parseInt(id))
                    setTickets(singleItem)
                    // console.log(singleItem)
                }
            });
    }, [])

    // console.log(ticket.id);

    // data show korena 

    return (
        <div className="container mt-5">
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="" class="img-fluid rounded-start" alt="show-images" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Name:{name}</h5>
                            <p class="card-text">{summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketDetails;