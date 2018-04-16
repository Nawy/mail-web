import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const Write = () => (
    <div className="container">
        <div className="row justify-content-end element-block">
            <button className="btn btn-outline-primary"><b>ПОСЛАТЬ</b></button>
        </div>

        <div className="row element-block">
            <form class="form-inline inline-write-login">
                <input type="text" className="form-control" placeholder="От кого"/>
                <label class="sr-only" for="inlineFormInput">Уже существует</label>
                <input type="text" className="form-control" placeholder="Пароль"/>
                <button type="submit" class="btn btn-primary">Submit</button>
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

