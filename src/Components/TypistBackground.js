import React from 'react';
import { Parallax } from 'react-parallax';
import Typist from './Typist';


const TypistBackground = () => {
    let greetings=["Hello","Hola","ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];
    return (

        <div id="Intro" className={"page-container"}>

            <Parallax
                blur={{min:-20, max:20}}
                bgImage={require('../Assets/images/background-wall.jpg')}
                style={{maxHeight:710}}
                bgImageAlt="the cat"
                strength={2}>
                <Typist text={greetings}/>
                <div style={{height:'200px'}}/>
            </Parallax>
        </div>
    );
};

export default TypistBackground;