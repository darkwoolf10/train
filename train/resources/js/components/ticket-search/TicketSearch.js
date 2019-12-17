import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';

import './TicketSearch.css';

export default class TicketSearch extends Component {
  
  constructor() {
    super()
    this.state = {
      cities : ['Cherkassy', 'Kiev', 'Smila', 'Lviv', 'Dnipro', 'Odessa'],
      from: '',
      to: ''
    }

    this.hadleChange = this.hadleChange.bind(this);
    this.search = this.search.bind(this);
  }

  hadleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  search(event) {

  }

  render() {
    return (
      <form class="searchTicket">
        <div class="from">
        <InputLabel id="demo-simple-select-label">From</InputLabel>
        <Select
          name="from"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.hadleChange}
        >
          {
            this.state.cities.map((el, index) => <MenuItem value={el} key={index} >{el}</MenuItem>)
          }
        </Select>
        </div>
        <div class="to">
        <InputLabel id="demo-simple-select-label">To</InputLabel>
        <Select
          name="to"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.hadleChange}
        >
          {
            this.state.cities.map((el, index) => <MenuItem value={el} key={index} >{el}</MenuItem>)
          }
        </Select>
        </div>
        <SearchIcon onClick={this.search}></SearchIcon>
      </form>
    );
  }
}

if (document.getElementById('ticket-search')) {
  ReactDOM.render(<TicketSearch />, document.getElementById('ticket-search'));
}
