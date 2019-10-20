import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends Component {
    render() {
        return (
            <div className="container">
                HELLO MY FRIEND!
            </div>
        );
    }
}

if (document.getElementById('hello')) {
    ReactDOM.render(<Hello />, document.getElementById('hello'));
}
