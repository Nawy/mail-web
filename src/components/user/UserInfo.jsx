import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBars from "@fortawesome/fontawesome-free-solid/faBars";

const UserInfo = ({userName}) =>
    <div className="d-flex flex-row">
        <FontAwesomeIcon icon={faBars}/>
        {userName}
    </div>;

export default UserInfo;