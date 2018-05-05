import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

const UserInfo = ({userName}) =>
    <div className="user-card">
        <div className="d-flex flex-row">
            <div className="p-1"><FontAwesomeIcon icon={faBars}/></div>
            <div className="p-1">{userName}</div>
        </div>
    </div>;

export default UserInfo;