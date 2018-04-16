import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const Write = () => (
    <div className="container">
        <div className="row justify-content-end element-block">
            <button className="btn btn-outline-primary"><b>ПОСЛАТЬ</b></button>
        </div>

        <div className="row element-block">
            <form className="form-inline row">
                <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="От кого"/>
                <label className="mr-sm-2">Уже существует</label>
                <input type="password" className="form-control mb-2 mr-sm-2 mb-sm-0" placeholder="Пароль"/>
                <button type="submit" className="btn btn-primary">OK</button>
            </form>
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

