import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import ModeSwitcher from './modeSwitcher';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
           <div className="container">
               <div className="row justify-content-md-center">
                   <h1>EMail 2.0</h1>
               </div>
               <ModeSwitcher/>
           </div>
        )
    };
}

export default Header;