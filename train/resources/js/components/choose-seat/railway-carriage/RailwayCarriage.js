import React from 'react';
import RailwayCarriageSeat from '../railway-carriage-seat/RailwayCarriageSeat';

import './RailwayCarriage.css';


const RailwayCarriage = ({ seats, onSelectSeat }) => {
  return (
    <div className="carriadge">
      {
        seats.map((seat, index) =>
          <RailwayCarriageSeat
            key={index}
            seat={seat}
            onSelectSeat={onSelectSeat} />)
      }
    </div>)
}

export default RailwayCarriage;