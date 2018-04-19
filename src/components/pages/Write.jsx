import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const Write = () => (
    <div className="container">
        <div className="row justify-content-end element-block">
            <button className="btn btn-outline-primary"><b>ПОСЛАТЬ</b></button>
        </div>

        <div className="row element-block">
            <div className="col-sm-12">
                <TextareaAutosize placeholder='Кому'/>
            </div>
        </div>
        <div className="row element-block">
            <div className="col-sm-12">
                <TextareaAutosize placeholder='Текст письма'/>
            </div>
        </div>
    </div>
);

export default Write;

