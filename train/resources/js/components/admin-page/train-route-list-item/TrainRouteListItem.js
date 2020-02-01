import React from 'react';
import Button from '@material-ui/core/Button';

import './TrainRouteListItem.css';

const TrainRouteListItem = ({ route: { from, to, price, departure_time, arrival_time, train_number } }) => {
  return (
    <div className="table-row">
      <div className="column">{train_number}</div>
      <div className="column">{`${from.city}/${to.city}`}</div>
      <div className="column">{`${departure_time}`}</div>
      <div className="column">{`${arrival_time}`}</div>
      <div className="column">{price} UAH</div>
    </div>
  )
}

export default TrainRouteListItem;