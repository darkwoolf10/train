import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RailwayCarriadge from './railway-carriadge/RailwayCarriadge';
import TicketList from '../ticket-list/TicketList';

import './ChooseSeat.css';

export default class ChooseSeat extends Component {

  constructor() {
    super()
    this.state = {
      seats: [
        {
          number: 1,
          price: 245,
          sold: true,
          selected: false,
        },
        {
          number: 2,
          price: 255,
          sold: false,
          selected: false
        },
        {
          number: 3,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 4,
          cena: 333,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 5,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 6,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 7,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 8,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 9,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 10,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 11,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 12,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 13,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 14,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 15,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 16,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 17,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 18,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 19,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 20,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 21,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 22,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 23,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 24,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 25,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 26,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 27,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 28,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 29,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 30,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 31,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 32,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 33,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 34,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 35,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 36,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 37,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 38,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 39,
          sold: true,
          selected: false,
          price: 245,
        },
        {
          number: 40,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 41,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 42,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 43,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 44,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 45,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 46,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 47,
          sold: true,
          selected: false,
          price: 245,
        },
        {
          number: 48,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 49,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 50,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 51,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 52,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 53,
          sold: false,
          selected: false,
          price: 245,
        },
        {
          number: 54,
          sold: false,
          selected: false,
          price: 245,
        },
      ]
    }
    this.onSelectSeat = this.onSelectSeat.bind(this)
  }

  onSelectSeat(ticket) {
    if (ticket.sold) {
      return;
    }
    let seatsCopy = [...this.state.seats];
    let selectedSeat;
    seatsCopy = seatsCopy.map(seat => {
      if (seat.number === ticket.number) {
        selectedSeat = { number: seat.number, selected: !seat.selected, sold: seat.sold };
        return selectedSeat;
      }
      else {
        return seat;
      }
    });
    this.setState({ seats: seatsCopy })
  }


  render() {
    let selectedSeats = this.state.seats.filter(seat => seat.selected === true);

    return (
      <React.Fragment>
        <RailwayCarriadge seats={this.state.seats} onSelectSeat={this.onSelectSeat} />
        {
          selectedSeats.length > 0 ? <TicketList selectedSeats={selectedSeats} /> : null
        }
      </React.Fragment>
    );

  }
}

// if (document.getElementById('ticket-search')) {
//   ReactDOM.render(<ChooseSeat />, document.getElementById('ticket-search'));
// }
