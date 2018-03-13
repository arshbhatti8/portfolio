import React from 'react';
import { Parallax } from 'react-parallax';
import Typist from './Typist';

const parallax = () => {
    let greetings=["Hi","Ola"];
    return (

        <div className={"page-container"}>
            <div className={"row"}>
            <div className={"col-md-12"}>
            <Parallax
                blur={{min:-15, max:20}}
                bgImage={require('../images/sjsu3.jpg')}
                bgImageAlt="the cat"
                strength={2}
            >
                <Typist text={greetings}/>
                <div style={{height:'200px'}}/>
            </Parallax>
            </div>

            </div>

        </div>
    );
};

export default parallax;