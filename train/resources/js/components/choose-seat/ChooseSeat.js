import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RailwayCarriadge from './railway-carriadge/RailwayCarriadge';

import './ChooseSeat.css';

export default class ChooseSeat extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <RailwayCarriadge />
    );
  }
}

// if (document.getElementById('ticket-search')) {
//   ReactDOM.render(<ChooseSeat/>, document.getElementById('ticket-search'));
// }
