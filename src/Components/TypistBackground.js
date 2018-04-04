import React from 'react';
import Typist from './Typist';
import Particles from './particlesBackground';
import '../stylesheets/Particles.css';
import Radium ,{StyleRoot} from 'radium';

const style = {


    '@media screen and (min-device-width: 800px) and (max-device-width: 1600px)':
        {
            position: 'absolute',
            zIndex: '5',
            left:'50%',
            top:'50%',
            transform:'translate(-50%,-50%)',
            width:'400px'
        },
    '@media screen and (min-device-width: 320px) and (max-device-width: 736px)':
        {
            position: 'absolute',
            zIndex: '5',
            width:'60px',
            fontSize:'0.1vw'
        }



};
const TypistBackground = () => {
    let greetings=["Hello","Hola","ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];
    return (

       <StyleRoot>
            <div>
                <div style={style}>
                    <Typist text={greetings} />
                </div>
            <Particles className='particles'>
            </Particles></div>
       </StyleRoot>
    );
};

export default Radium(TypistBackground);