import React from 'react';
import '../stylesheets/Spinner.css'
import Bars from '../Assets/images/bars.svg';
const Spinner = props => {
    return (
        <div className='spinner'>
            <img src={Bars}/>
        </div>
    );

};
export default Spinner;
