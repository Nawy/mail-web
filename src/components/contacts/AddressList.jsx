import React, {Component} from 'react';
import isEmpty from 'lodash/isEmpty'
import Address from './Address'

class AddressList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSpamChatNames();
    }

    render() {
        return (
            <div className="letter-card">
                <p>{this.props.session.name}@ermolaev.am</p>
                <ul className="list-group list-group-flush">
                    {isEmpty(this.props.spamChatNames) ?
                        <p>Пусто</p> :
                        this.props.spamChatNames.map((value, i) => <Address address={{name: value, count: 0}}/>)
                    }
                </ul>
            </div>);
    }
};

export default AddressList;

