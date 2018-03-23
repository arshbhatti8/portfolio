import React from 'react';
import '../stylesheets/Spinner.css'
import Bars from '../Assets/images/bars.svg';

const Spinner = () => {
    return (
        <div className='spinnerWrapper'>
            <img className='spinner' src={Bars}/>
        </div>
    );

};
export default Spinner;
