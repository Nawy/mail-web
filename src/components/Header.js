import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

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
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">PERSEUS</Link>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/roster">Roster</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    };
}

export default Header;