import React from 'react';

import './RailwayCarriadgeSeat.css';

const RailwayCarriadgeSeat = ({ number }) => {
  return (
    <div className={
      number <= 18 ? "seat up" :
        number > 36 && number % 2 == 0 ? "seat up" : "seat down"} >
      {
        number
      }
    </div>

  )
}

export default RailwayCarriadgeSeat;