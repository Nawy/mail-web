import React, {Component} from 'react';

const write = () => (
    <div className="container">
        <div className="row">
            <h1>Заголовок письма</h1>
            <p>Умирать не страшно. Страшно, когда выпадаешь из реальности. Или когда реальность выбрасывает тебя.</p>
            {/*<TextareaAutosize value="Test"></TextareaAutosize>*/}
            <TextareaAutosize
                placeholder='try writing some lines'
            />
        </div>

        <div className="row">
            <button className="btn btn-outline-primary"><b>SEND</b></button>
        </div>
    </div>
);

export default write;

