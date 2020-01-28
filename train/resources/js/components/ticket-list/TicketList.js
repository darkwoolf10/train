import React from 'react';
import TicketListItem from '../ticket-list-item/TicketListItem';

import './TicketList.css';

const TicketList = ({ selectedSeats }) => {
  return (
    <div className="tickets">
      {
        selectedSeats.map(seat => <TicketListItem ticket={seat} />)
      }

    </div>
  )
}

export default TicketList;
