import React, {Component} from 'react';
import {Button, ButtonGroup, Col, Row} from "reactstrap";

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
            <Row style={{borderBottom: '1px solid', marginTop: '5%'}}>
                <Col><h3>Messenger</h3></Col>
                <Col className="text-right">
                    <ButtonGroup>
                        <Button outline color="secondary">INBOX</Button>
                        <Button outline color="secondary">OUTBOX</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        );
    };
}

export default Header;