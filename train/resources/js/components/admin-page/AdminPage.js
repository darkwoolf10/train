import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddRoute from './add-route/AddRoute';

export default class AdminPage extends Component {

  constructor() {
    super();
    this.state = {
      showModal: false,
    }
    this.addNewTrainRoute = this.addNewTrainRoute.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  addNewTrainRoute() {
    this.setState({
      ...this.state,
      showModal: !this.state.showModal
    })
  }

  closeForm() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    return (
      <div>
        <AddCircleOutlineIcon onClick={this.addNewTrainRoute}></AddCircleOutlineIcon>
        <AddRoute closeForm={this.closeForm} showModal={this.state.showModal}/>
      </div>
    )
  }
}

if (document.getElementById('admin-page')) {
  ReactDOM.render(<AdminPage />, document.getElementById('admin-page'));
}
