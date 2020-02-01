import React from 'react';
import classNames from 'classnames'

import './RailwayCarriadgeSeat.css';

const RailwayCarriadgeSeat = ({ seat: { number, sold, selected }, onSelectSeat, seat }) => {
  let seatClass = classNames({
    "seat": true,
    "up": number <= 18 || number > 36 && number % 2 == 0,
    "down": number > 18 && number <= 36 || number > 36 && number % 2 !== 0,
    "selected": selected,
    "sold": sold,
  })

  return (
    <div
      onClick={() => onSelectSeat(seat)}
      className={
        seatClass
      }>
      {
        number
      }
    </div>

  )
}

export default RailwayCarriadgeSeat;