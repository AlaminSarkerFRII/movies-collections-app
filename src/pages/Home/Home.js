import React from 'react';
import Header from '../../components/Header/Header';
import Ticket from '../Ticket/Ticket';

import Tickets from '../Tickets/Tickets';

const Home = () => {
    return (
        <div>
            <Header/>
            <Tickets/>
        </div>
    );
};

export default Home;