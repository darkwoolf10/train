import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TrainRouteListItem from '../train-route-list-item/TrainRouteListItem';

import './TrainRouteList.css';

export default class TrainRouteList extends Component {

  constructor() {
    super()
    this.state = {
      routes: [
        {
          trainNumber: 234,
          from: 'Kyiv',
          to: 'Cherkassy',
          departureTime: "20:00",
          departureDate: "11.10.20",
          arrivalTime: "10:00",
          arrivalDate: "12.10.20",
          freeSeats: 20
        },
        {
          trainNumber: 24,
          from: 'Lviv',
          to: 'Odessa',
          departureTime: "20:00",
          departureDate: "11.10.20",
          arrivalTime: "10:00",
          arrivalDate: "12.10.20",
          freeSeats: 20
        },
      ]
    }
  }

  render() {
    return (
      <div className='routes-table'>
        <div className="header">
          <div className="header-column">Train number</div>
          <div className="header-column">From/To</div>
          <div className="header-column">Departure time</div>
          <div className="header-column">Arrival time</div>
          <div className="header-column">Free seats</div>
        </div>
        <div className="body">
          {
            this.state.routes.map(route => <TrainRouteListItem route={route} />)
          }
        </div>
      </div>
    )
  }
}


if (document.getElementById('ticket-search')) {
  ReactDOM.render(<TrainRouteList />, document.getElementById('ticket-search'));
}