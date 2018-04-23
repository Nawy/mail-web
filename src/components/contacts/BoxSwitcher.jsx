import React from 'react';

const BoxSwitcher = () => {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <a className="nav-link active" href="#">Letters</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Spam</a>
            </li>
        </ul>
    );
};

export default BoxSwitcher;