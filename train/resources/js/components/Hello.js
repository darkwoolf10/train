import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class Hello extends Component {
    render() {
        return (
            <div className="container">
                HELLO MY FRIEND!
                <br/>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}

if (document.getElementById('hello')) {
    ReactDOM.render(<Hello />, document.getElementById('hello'));
}
