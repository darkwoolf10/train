import React from 'react';
import Button from '@material-ui/core/Button';

import './TrainRouteListItem.css';

const TrainRouteListItem = ({ route: { trainNumber, from, to, departureTime, departureDate, arrivalTime, arrivalDate, freeSeats } }) => {
  return (
    <div className="table-row">
      <div className="column">{trainNumber}</div>
      <div className="column">{`${from}/${to}`}</div>
      <div className="column">{`${departureTime} ${departureDate}`}</div>
      <div className="column">{`${arrivalTime} ${arrivalDate}`}</div>
      <div className="column">{freeSeats}</div>
    </div>
  )
}

export default TrainRouteListItem;