import React from 'react';
import TicketListItem from '../ticket-list-item/TicketListItem';

import Button from '@material-ui/core/Button';

import './TicketList.css';

const TicketList = ({ selectedSeats, buyTickets }) => {
  return (
    <div className="tickets">
      {
        selectedSeats.map(seat => <TicketListItem ticket={seat} />)
      }
      <Button onClick={() => buyTickets()} >BUY</Button>
    </div>
  )
}

export default TicketList;
