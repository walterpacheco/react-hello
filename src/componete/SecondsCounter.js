import propTypes from 'prop-types';
import React from 'react';


//import './component/icons';
function SecondsCounter(props) {
    return (

        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>

    );
}
SecondsCounter.propTypes = {
    digitOne: propTypes.number,
    digitTwo: propTypes.number,
    digitThree: propTypes.number,
    digitFour: propTypes.number,
    digitFive: propTypes.number
};



export default SecondsCounter;