import React, {Component} from 'react';
import {Link} from "react-router-dom";

const ModeSwitcher = () => (
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <span className="nav-link"><Link to='/letters'>ЧИТАТЬ</Link></span>
        </li>
        <li className="nav-item">
            <span className="nav-link" href="#"><Link to='/write'>ОТПРАВИТЬ</Link></span>
        </li>
    </ul>
);

export default ModeSwitcher;

