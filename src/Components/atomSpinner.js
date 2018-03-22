import React from 'react';
import '../stylesheets/Atom.css'
import Atom from '../Assets/images/atom.svg';

const AtomSpinner = props => {
    return (
        <div className='atomWrapper'>
            <img className='atom' src={Atom}/>
        </div>
    );
//TODO: Need to figure out how to make this work inside the project
};
export default AtomSpinner;
