import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faInbox from "@fortawesome/fontawesome-free-solid/faInbox";


class Settings extends Component {

    constructor(props) {
        super(props);
    }

    handleLogout = (event) => {
        event.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <div>
                <div className="letter-card">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="p-1"><h4><FontAwesomeIcon icon={faInbox}/></h4></div>
                        <div className="p-1"><h4>{this.props.session.name}@lite.ninja</h4></div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                        <div className="p-1">
                            <button type="button" className="button" onClick={this.handleLogout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default Settings;

