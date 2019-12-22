import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

import './AddRoute.css';

export default class AddRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromCityName: '',
      toCityName: '',
      departureTime: Date.now(),
      arrivalTime: Date.now(),
      departureDate: Date.now(),
      arrivalDate: Date.now(),
      price: '',
      trainNumber: '',
      namberOfCarriages: '',
      cities: []
    }
    this.handleClose = this.handleClose.bind(this);
    this.hadleDepartureTimeChange = this.hadleDepartureTimeChange.bind(this);
    this.hadleDepartureDateChange = this.hadleDepartureDateChange.bind(this);
    this.hadleArrivalTimeChange = this.hadleArrivalTimeChange.bind(this);
    this.hadleChange = this.hadleChange.bind(this);
    this.hadleArrivalDateChange = this.hadleArrivalDateChange.bind(this);
  }

  handleClose() {
    this.props.closeForm()
  }

  hadleDepartureTimeChange(date) {
    this.setState({
      ...this.state,
      departureTime: date
    })
  }

  hadleDepartureDateChange(date) {
    this.setState({
      ...this.state,
      departureDate: date
    })
  }

  hadleArrivalDateChange(date) {
    this.setState({
      ...this.state,
      arrivalDate: date
    })
  }

  hadleArrivalTimeChange(date) {
    this.setState({
      ...this.state,
      arrivalTime: date
    })
  }

  hadleChange(event) {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  createTraineRoute() {
    // POST method
    this.props.closeForm()
  }

  componentDidMount() {
    axios.get('api/stations')
      .then(res => this.setState({
        ...this.state,
        cities: res.data
      }));
  }

  render() {
    return (

      <Dialog open={this.props.showModal} aria-labelledby="form-dialog-title">
        <form className="addNewTrainRoute">
          <DialogTitle id="form-dialog-title">Add new train route</DialogTitle>
          <DialogContent>
            <div className="from">
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                name="fromCityName"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={this.hadleChange}
              >
                {
                  this.state.cities.map((city, index) => <MenuItem value={city.name} key={index} >{city.name}</MenuItem>)
                }
              </Select>
            </div>
            <div className="to">
              <InputLabel id="demo-simple-select-label">To</InputLabel>
              <Select
                name="toCityName"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={this.hadleChange}
              >
                {
                  this.state.cities.map((city, index) => <MenuItem value={city.name} key={index} >{city.name}</MenuItem>)
                }
              </Select>
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Departure time"
                value={this.state.departureTime}
                onChange={this.hadleDepartureTimeChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Arrival time"
                value={this.state.arrivalTime}
                onChange={this.hadleArrivalTimeChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Departure date"
                value={this.state.departureDate}
                onChange={this.hadleDepartureDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Arrival date"
                value={this.state.arrivalDate}
                onChange={this.hadleDepartureDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              onChange={this.hadleChange}
              name="price"
              id="standard"
              label="Price"
            />
            <TextField
              onChange={this.hadleChange}
              name="trainNumber"
              id="standard"
              label="Train number"
            />
            <TextField
              onChange={this.hadleChange}
              name="namberOfCarriages"
              id="standard"
              label="Number of carriages"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
        </Button>
            <Button onClick={this.createTraineRoute} color="primary">
              Create
        </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}