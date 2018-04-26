import React from 'react';
import Address from './Address'

const AddressList = (props) => (
    <div className="letter-card">
        <p>{props.session.name}@ermolaev.am</p>
        <ul className="list-group list-group-flush">
            <Address address={{name: "ermolaev@live.ru", count: 34}} />
            <Address address={{name: "ermolaev@live.ru", count: 34}} />
            <Address address={{name: "ermolaev@live.ru", count: 34}} />
        </ul>
    </div>
);

export default AddressList;

