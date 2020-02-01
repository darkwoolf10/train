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
import FormControl from '@material-ui/core/FormControl';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';

import './AddRoute.css';

export default class AddRoute extends Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      fromCityName: '',
      toCityName: '',
      departureTime: date,
      arrivalTime: date,
      departureDate: date,
      arrivalDate: date,
      price: '',
      trainNumber: '',
      numberOfCarriages: '',
      cities: []
    }
    this.hadleDepartureTimeChange = this.hadleDepartureTimeChange.bind(this);
    this.hadleDepartureDateChange = this.hadleDepartureDateChange.bind(this);
    this.hadleArrivalTimeChange = this.hadleArrivalTimeChange.bind(this);
    this.hadleChange = this.hadleChange.bind(this);
    this.hadleArrivalDateChange = this.hadleArrivalDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.closeForm()
    this.handleSubmit = this.handleSubmit.bind(this);

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
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const route = {
      fromCityName: this.state.fromCityName,
      toCityName: this.state.toCityName,
      departureTime: this.state.departureTime,
      departureDate: this.state.departureDate,
      arrivalTime: this.state.arrivalTime,
      arrivalDate: this.state.arrivalDate,
      price: this.state.price,
      trainNumber: this.state.trainNumber,
    };

    axios.post('api/admin/route-store', { route })

    this.props.closeForm();
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
        <form onSubmit={this.handleSubmit} className="addNewTrainRoute">
          <DialogTitle id="form-dialog-title">Add new train route</DialogTitle>
          <DialogContent>
            <FormControl required className="from">
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                required
                name="fromCityName"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={this.hadleChange}
              >
                {
                  this.state.cities.map((city, index) => <MenuItem value={city.name} key={index} >{city.name}</MenuItem>)
                }
              </Select>
            </FormControl>
            <FormControl required className="to">
              <InputLabel id="demo-simple-select-label">To</InputLabel>
              <Select
                required
                name="toCityName"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={this.hadleChange}
              >
                {
                  this.state.cities.map((city, index) => <MenuItem value={city.name} key={index} >{city.name}</MenuItem>)
                }
              </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                required
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
                required
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
                required
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
                required
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Arrival date"
                value={this.state.arrivalDate}
                onChange={this.hadleArrivalDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              required
              type="number"
              onChange={this.hadleChange}
              name="price"
              id="standard"
              label="Price"
            />
            <TextField
              required
              type="number"
              onChange={this.hadleChange}
              name="trainNumber"
              id="standard"
              label="Train number"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeForm} color="primary">
              Cancel
        </Button>
            <Button type="submit" color="primary">
              Create
        </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}
