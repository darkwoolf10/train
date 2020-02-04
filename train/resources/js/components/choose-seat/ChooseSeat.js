import React, { Component } from 'react';
import RailwayCarriage from './railway-carriage/RailwayCarriage';

import TicketList from '../ticket-list/TicketList';

import axios from 'axios';

import './ChooseSeat.css';

export default class ChooseSeat extends Component {

  constructor() {
    super()
    let seats = [];
    for (let i = 1; i <= 54; i++) {
      let seat = {
        number: i,
        price: null,
        sold: false,
        selected: false,
        baggage: false,
        bedspread: false,
        tea: false
      }
      seats.push(seat);
    }

    this.state = {
      seats: seats,
      selected: [],
      routeId: null,
      price: null,
    }
    this.onSelectSeat = this.onSelectSeat.bind(this);
    this.buyTickets = this.buyTickets.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    const { price } = this.props.location.state
    this.setState({ routeId: id });
    let seatsCopy = [...this.state.seats];
    seatsCopy = seatsCopy.map((seat) => {
      return {
        number: seat.number,
        selected: seat.selected,
        sold: seat.sold,
        price: price,
        baggage: seat.baggage,
        tea: seat.tea,
        bedspread: seat.bedspread
      }
    })
    this.setState({ seats: seatsCopy });
    axios.get('http://localhost:8080/api/route/occupied-seats', {
      params: {
        route: id
      }
    })
      .then(res => {
        let soldTickets = res.data.response;
        let seatsCopy = [...this.state.seats];
        seatsCopy = seatsCopy.map(seat => {
          if (soldTickets.includes(seat.number)) {
            return {
              ...seat,
              sold: true
            }
          }
          else {
            return seat
          }
        });
        this.setState({ seats: seatsCopy });
      });
  }

  onSelectSeat(ticket) {
    if (ticket.sold) {
      return;
    }
    let seatsCopy = [...this.state.seats];
    let selectedSeat;
    seatsCopy = seatsCopy.map(seat => {
      if (seat.number === ticket.number) {
        selectedSeat = {
          number: seat.number,
          selected: !seat.selected,
          sold: seat.sold,
          price: seat.price,
          baggage: seat.baggage,
          tea: seat.tea,
          bedspread: seat.bedspread
        };
        return selectedSeat;
      }
      else {
        return seat;
      }
    });

    this.setState((state) => {
      state.seats = seatsCopy;
      return state;
    }, () => {
      let selected = this.state.seats.filter(seat => seat.selected === true);
      this.setState((state) => {
        state.selected = selected;
        return state;
      });
    });


  }

  buyTickets(relatedServices) {
    let tickets = [];
    this.state.selected.forEach(ticket => {
      tickets.push({
        route: +this.state.routeId,
        position: ticket.number,
        baggage: relatedServices.baggage,
        bedspread: relatedServices.bedspread,
        tea: relatedServices.tea,
      });
    })
    axios.post('http://localhost:8080/api/create-ticket', {
      tickets
    })
  }

  render() {
    return (
      <React.Fragment>
        <RailwayCarriage seats={this.state.seats} onSelectSeat={this.onSelectSeat} />
        {
          this.state.selected.length !== 0 ? <TicketList buyTickets={this.buyTickets} selectedSeats={this.state.selected} price={this.state.seats[0].price} /> : null
        }
      </React.Fragment>
    );
  }
}
