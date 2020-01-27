import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TicketSearch from '../ticket-search/TicketSearch';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path='/ticket-search' component={TicketSearch}>

            </Route>
          </Switch>
        </Router>
      </div>)
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
