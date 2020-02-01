import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import TicketSearch from '../ticket-search/TicketSearch';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path='/' component={TicketSearch}>

            </Route>
          </Switch>
        </Router>
      </div>)
  }
}

if (document.getElementById('ticket-search')) {
  ReactDOM.render(<App />, document.getElementById('ticket-search'));
}

