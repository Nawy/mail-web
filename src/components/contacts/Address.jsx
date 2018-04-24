import React from 'react';

const Address = ({address}) => (
    <li className="list-group-item">
        {address.name}
        <span className="badge badge-default badge-pill"><b>{address.count}</b></span>
    </li>
);

export default Address;