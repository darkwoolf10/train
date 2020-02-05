import React, { Component } from 'react';

import './TicketListItem.css';

export default class TicketListItem extends Component {
  constructor() {
    super()
    this.state = {
      tea: false,
      bedspread: false,
      baggage: false,
    }
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(event) {
    const { tea, baggage, bedspread } = this.state;
    this.setState({
      ...this.state,
      [event.target.name]: event.target.checked,
    }, () => this.props.buy({ number: this.props.number, tea, baggage, bedspread }))
  }

  render() {
    const { ticket: { number, price } } = this.props;
    return (
      <div className="ticket">
        <div>{`Seat number ${number}`}</div>
        <div>{`Price ${price} UAH`}</div>
        <div><input onChange={this.onHandleChange} name="baggage" type="checkbox"></input>baggage 10 UAH</div>
        <div><input onChange={this.onHandleChange} name="bedspread" type="checkbox"></input>bedspread 10 UAH</div>
        <div><input onChange={this.onHandleChange} name="tea" type="checkbox"></input>Tea 10 UAH</div>
      </div>
    )
  }
}