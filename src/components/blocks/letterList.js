import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const LetterList = () => (
    <div>
        <div className="letter-card">
            <TextareaAutosize placeholder='Текст письма'/>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">Today</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">Yesterday</h6>
                <p className="card-text">Yvonne Fletcher was fatally wounded on 17 April 1984 by a shot coming from the
                    Libyan embassy on St James's Square in London. She had been deployed as a constable of the
                    Metropolitan Police to monitor a demonstration against the Libyan leader Muammar Gaddafi. During the
                    protest, two unknown gunmen opened fire with Sterling submachine guns, killing Fletcher and wounding
                    eleven Libyans. The inquest found that she was "killed by a bull</p>
            </div>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">Friday</h6>
                <p className="card-text">Сча́стье (праславянское *sъčęstь̂je объясняют из *sъ- «хороший» и *čęstь
                    «часть», то есть «хороший удел»[1]) — состояние человека, которое соответствует наибольшей
                    внутренней удовлетворённости условиями своего бытия, полноте и осмысленности жизни, осуществлению
                    своего человеческого назначения[2].

                    Феномен счастья изучается, в основном, философией, психологией, богословием и оккультизмом.</p>
            </div>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">23th April</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">2th December 2017</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">11th May 2016</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
        <div className="letter-card">
            <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">23th February 2016</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
            </div>
        </div>
    </div>
);

export default LetterList;

