import React, {Component} from 'react';
import {Link} from "react-router-dom";

const ModeSwitcher = (props) => {
    if (!props.isAuthorized) return <ul className="nav justify-content-center"/>;
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <span className="nav-link"><Link to='/letters'><b>ЧИТАТЬ</b></Link></span>
            </li>
            <li className="nav-item">
                <span className="nav-link" href="#"><Link to='/write'><b>ОТПРАВИТЬ</b></Link></span>
            </li>
        </ul>
    );
};

export default ModeSwitcher;

