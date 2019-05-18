import React, { Component } from 'react';

import './Header.css';
import logo from './graduation.svg'; // Tell Webpack this JS file uses this image

class Header extends Component {
    render() {
        return(
            <div className="Header-container">
                <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h1>
                <img className="logo" src={logo} alt="Logo" />
            </div>
        )
    }
}
export default Header;