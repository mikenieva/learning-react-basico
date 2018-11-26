import React from 'react';
import TimeUntil from './TimeUntil';
import kygo from '../../resources/images/kygo.jpg';
import kygologo from '../../resources/images/kygo-logo.jpg'

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <img alt="kygo" src={kygo} style={{
                width: '100%'
            }}/>

            <div className="artist_name">
                <div className="wrapper">
                    <h1>Kygo</h1>
                </div>
            </div>

            <TimeUntil/>

        </div>
    );
};

export default Featured;