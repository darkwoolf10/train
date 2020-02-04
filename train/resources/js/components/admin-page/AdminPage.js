import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddRoute from './add-route/AddRoute';
import axios from 'axios';

import TrainRouteList from './train-route-list/TrainRouteList';

export default class AdminPage extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
      routes: []
    }
    this.addNewTrainRoute = this.addNewTrainRoute.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  componentDidMount() {
    axios.get('api/routes')
      .then(res => this.setState({ routes: res.data.response }));
  }

  addNewTrainRoute() {
    axios.get('api/routes')
      .then(res => this.setState({ routes: res.data.response, showModal: !this.state.showModal }));
  }

  closeForm() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    return (
      <div>
        <TrainRouteList admin={true} routes={this.state.routes} />
        <AddCircleOutlineIcon onClick={this.addNewTrainRoute}></AddCircleOutlineIcon>
        <AddRoute closeForm={this.closeForm} showModal={this.state.showModal} />
      </div>
    )
  }
}

if (document.getElementById('admin-page')) {
  ReactDOM.render(<AdminPage />, document.getElementById('admin-page'));
}
