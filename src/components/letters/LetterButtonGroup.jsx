import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from "@fortawesome/fontawesome-free-solid/faPencilAlt";
import faReply from "@fortawesome/fontawesome-free-solid/faReply";

class LetterButtonGroup extends Component {

    getButtonTypeClass = (predicate) => predicate ? "btn-rounded-selected ml-1" : "btn-rounded ml-1";

    changeNewLetterWindowVisibility = () => {
        if (this.props.windows.isNewLetterWindowOpen) {
            this.props.hideAllWindows();
        } else {
            this.props.showNewLetterForm();
        }
    };

    changeReplyWindowVisibility = () => {
        if (this.props.windows.isReplyWindowOpen) {
            this.props.hideAllWindows();
        } else {
            this.props.showReplyForm();
        }
    };

    render() {
        const props = this.props;
        return (
            <div>
                <button
                    type="button"
                    className={this.getButtonTypeClass(props.windows.isNewLetterWindowOpen)}
                    onClick={() => this.changeNewLetterWindowVisibility()}
                >
                    <FontAwesomeIcon icon={faPencilAlt}/> Новое сообщение
                </button>
                <button
                    type="button"
                    className={this.getButtonTypeClass(props.windows.isReplyWindowOpen)}
                    onClick={() => this.changeReplyWindowVisibility()}
                >
                    <FontAwesomeIcon icon={faReply}/> Ответить
                </button>
            </div>
        );
    }
}


export default LetterButtonGroup;