import React from 'react';
import RailwayCarriadgeSeat from '../railway-carriadge-seat/RailwayCarriadgeSeat';

import './RailwayCarriadge.css';


const RailwayCarriadge = ({ seats, onSelectSeat }) => {
  return (
    <div className="carriadge">
      {
        seats.map((seat, index) =>
          <RailwayCarriadgeSeat
            key={index}
            seat={seat}
            onSelectSeat={onSelectSeat} />)
      }
    </div>)
}

export default RailwayCarriadge;