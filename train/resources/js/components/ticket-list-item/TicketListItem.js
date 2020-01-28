import React from 'react';

const TicketListItem = ({ ticket: { number, price, selected } }) => {
  console.log(number);
  console.log(price);
  console.log(selected);

  return (
    <div className="ticket">
      <div>{`Seat number ${number}`}</div>
      <div>{`Price ${245} UAH`}</div>
      <div><input type="checkbox"></input>Tea 10 UAH</div>

    </div>
  )
}

export default TicketListItem;
