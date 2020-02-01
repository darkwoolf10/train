import React from 'react';
import ReactDOM from 'react-dom';

import TrainRouteListItem from '../train-route-list-item/TrainRouteListItem';

import './TrainRouteList.css';


const TrainRouteList = ({ routes }) => {
  console.log(routes);
  return (
    <div className='routes-table'>
      <div className="header">
        <div className="header-column">Train number</div>
        <div className="header-column">From/To</div>
        <div className="header-column">Departure time</div>
        <div className="header-column">Arrival time</div>
        <div className="header-column">Price</div>
      </div>
      <div className="body">
        {
          routes.map(route => <TrainRouteListItem route={route} />)
        }
      </div>
    </div>
  )
}

export default TrainRouteList;

// if (document.getElementById('ticket-search')) {
//   ReactDOM.render(<TrainRouteList />, document.getElementById('ticket-search'));
// }