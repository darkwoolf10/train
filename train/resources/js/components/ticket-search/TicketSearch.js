import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';

import './TicketSearch.css';

import TrainRouteList from '../admin-page/train-route-list/TrainRouteList';

export default class TicketSearch extends Component {

  constructor() {
    super()
    this.state = {
      cities: [],
      from: '',
      to: '',
      selectedDate: new Date(),
      routes: [],
      isFound: false,
    }

    this.hadleChange = this.hadleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.search = this.search.bind(this);
  }

  hadleChange(event) {
    console.log(event);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleDateChange(date) {
    this.setState({
      ...this.state,
      selectedDate: date
    })
  }

  search(event) {
    axios.get('api/find-routes', {
      params: {
        from: this.state.from,
        to: this.state.to,
        date: this.state.selectedDate
      }
    })
      .then(res => this.setState({ ...this.state, routes: res.data.response, isFound: true }))
  }

  componentDidMount() {
    axios.get('api/stations')
      .then(res => this.setState({
        ...this.state,
        cities: res.data
      }));
  }

  render() {
    if (!this.state.isFound) {
      return (
        <form className="searchTicket">
          <div className="from">
            <InputLabel id="demo-simple-select-label">From</InputLabel>
            <Select
              name="from"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={this.hadleChange}
            >
              {
                this.state.cities.map((city, index) => <MenuItem value={city.name} key={city.id} >{city.name}</MenuItem>)
              }
            </Select>
          </div>
          <div className="to">
            <InputLabel id="demo-simple-select-label">To</InputLabel>
            <Select
              name="to"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={this.hadleChange}
            >
              {
                this.state.cities.map((city, index) => <MenuItem value={city.name} key={city.id} >{city.name}</MenuItem>)
              }
            </Select>
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Select date"
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <SearchIcon onClick={this.search}></SearchIcon>
        </form>
      );
    }
    else {
      return (<TrainRouteList routes={this.state.routes} />)
    }
  }
}
