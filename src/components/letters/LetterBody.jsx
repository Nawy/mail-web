import React, {PureComponent} from 'react';
import DOMPurify from 'dompurify'
import moment from 'moment';
import isNull from 'lodash/isNull'
import 'moment/locale/ru';

moment.locale("ru");

class Letter extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {isOpened: false};
    }

    getTextPreview = (text) => isNull(text) ? "--" :
        text.length > 120 ? text.substr(0, 120) : text;

    getText = (text, htmlText) => this.state.isOpened ? <p className="card-text" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(htmlText)}}/> :
        <p className="card-text">{this.getTextPreview(text)}</p> ;

    openLetter = (e) => {
        this.setState({isOpened: !this.state.isOpened})
    };

    render() {
        const props = this.props;
        console.info(props.htmlText);
        return (
            <div className="card-block" onClick={this.openLetter}>
                <div className="letter-card-header">
                    <span className="mr-auto p-0">
                        <span className={props.direction === "OUT" ? "out-address-badge" : "in-address-badge"}>
                            {props.from}
                        </span>
                    </span>
                    <span className="p-0">
                        <span className="time-badge">
                            {moment(props.date, "YYYY-MM-DD'T'HH:mm:ss.SSS").fromNow()}
                        </span>
                    </span>
                </div>
                {this.getText(props.text, props.htmlText)}
            </div>
        )
    }
}

export default Letter;