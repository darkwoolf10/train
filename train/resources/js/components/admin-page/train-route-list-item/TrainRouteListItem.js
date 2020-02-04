import React from 'react';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import './TrainRouteListItem.css';

const TrainRouteListItem = ({ route: { from, to, price, departure_time, arrival_time, train_number, id }, admin }) => {
  return (
    <React.Fragment>
      <div className="table-row">
        <div className="column">{train_number}</div>
        <div className="column">{`${from.city}/${to.city}`}</div>
        <div className="column">{`${departure_time}`}</div>
        <div className="column">{`${arrival_time}`}</div>
        <div className="column">{price} UAH</div>
      </div>
      {
        admin ?
          null :
          <Button>
            <Link
              to=
              {
                {
                  pathname: `/route`,
                  state: { price: price, id: id }
                }
              }>Select
            </Link>
          </Button>
      }

    </React.Fragment>
  )
}

export default TrainRouteListItem;