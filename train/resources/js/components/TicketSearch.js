import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';

export default class TicketSearch extends Component {
    render() {
        return (
            // <form action="" method="POST">
            //     <Input type="text" />
            //     <SearchIcon onClick='' />
            // </form>
        );
    }
}

if (document.getElementById('ticket-search')) {
    ReactDOM.render(<TicketSearch />, document.getElementById('ticket-search'));
}
