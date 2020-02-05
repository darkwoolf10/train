import React, { Component } from 'react';
import TicketListItem from '../ticket-list-item/TicketListItem';

import Button from '@material-ui/core/Button';

import './TicketList.css';
import { el } from 'date-fns/locale';

export default class TicketList extends Component {

  constructor() {
    super()
    this.state = {
      tea: false,
      baggage: false,
      bedspread: false,
      total: 0,
    }
    this.buy = this.buy.bind(this);
    this.relatedServices
  }

  buy(relatedServices) {
    this.setState({
      tea: relatedServices.tea,
      baggage: relatedServices.baggage,
      bedspread: relatedServices.bedspread,
    });
    this.setState(state => state.total += 10)
  }


  render() {
    const { selectedSeats, buyTickets, price } = this.props;
    let numberOfTickets = selectedSeats.length;
    let total = numberOfTickets * price + this.state.total;

    return (
      <div className="tickets">
        {
          selectedSeats.map(seat => <TicketListItem buy={this.buy} ticket={seat} />)
        }
        <div>
          Total:
          {
            `${total} UAH`
          }
          <Button onClick={() => buyTickets(this.state)} >BUY</Button>
        </div>
      </div>
    )
  }
}