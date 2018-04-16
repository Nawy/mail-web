import React, {Component} from 'react';
import {Link} from "react-router-dom";

const choose = (props) => {
    props.checkUserName('taiberium'); //FIXME just for test
    return(
        <div className="container">
            <div className="row justify-content-md-center">
                <p>Умирать не страшно. Страшно, когда выпадаешь из реальности. Или когда реальность выбрасывает тебя.</p>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-sm-2 text-center">
                    <Link to='/letters'>
                        <button className="btn btn-outline-primary"><b>ЧИТАТЬ</b></button>
                    </Link>
                </div>
                <div className="col-sm-2 text-center">
                    <Link to='/write'>
                        <button className="btn btn-outline-primary"><b>ОТПРАВИТЬ</b></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default choose;

