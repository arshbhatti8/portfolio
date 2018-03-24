import React from 'react';
import {Grid,Image,Icon,Header} from 'semantic-ui-react';

const WhatIDo = () => {
    return (
        <div>
            <Grid container verticalAlign='middle' stackable celled='internally' relaxed >
                <h1 style={{fontSize:'3em'}}>What I do</h1>
                <Grid.Row>
                    <Grid.Column width={8} >
                        <Icon name='code'  size='massive' color='red'/>
                        <Icon name='css3 alternate' size='massive' color='yellow' />
                        <Icon name='js'  size='massive' color='blue' />
                        <Header as='h2'>
                            {' '}WEB DEVELOPMENT
                        </Header>
                        <p style={{fontSize:'1.2em'}}>Using HTML, CSS, and JavaScript with pre-processors and build tools such as Sass and Grunt,
                            I have a passion for developing pixel-perfect websites and apps while maintaining a semantic, modular, and DRY code base.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Icon name='angular'  size='massive' color='red' />
                        <Image src={require('../Assets/images/Redux-Icon.png')} style={{height:'90px',width:'90px',display:'inline',backgroundColor:'gold',borderRadius:'10%'}}/>
                        <Image src={require('../Assets/images/react-logo.ico')} style={{height:'150px',width:'150px',display:'inline'}}/>

                        <Header as='h2'>
                            {' '}FRONT-END FRAMEWORKS & LIBRARIES
                        </Header>
                        <p style={{fontSize:'1.2em'}}>"A user interface is like a joke. If you have to explain it, it's not that good."
                            I strive to develop and implement responsive and aesthetically pleasing interfaces for websites and apps that adapt to any type of device, platform, or browser.
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image fluid style={{width:"150px",height:"150px",display:'inline'}} src={require('../Assets/images/rest-logo.png')} />
                        <Icon name='node'  size='massive' color='green' />
                        <Image fluid style={{width:"200px",height:"12s0px",display:'inline',padding:'8px'}} src={require('../Assets/images/Express.png')} />
                        <Header as='h2'>
                            {' '}BACKEND LIBRARIES
                        </Header>
                        <p style={{fontSize:'1.2em'}}>There have been far too many times where I've been trying to accomplish a simple task on a website,
                            and ended up wanting to throw my computer out the window in frustration. Needless to say,
                            user experience is an aspect of software I believe is vital to a successful product.
                        </p>
                    </Grid.Column>

                    <Grid.Column width={8}>
                        <Image fluid style={{width:"150px",height:"150px",display:'inline'}} src={require('../Assets/images/MongoDB.png')} />
                        <Image fluid style={{width:"150px",height:"100px",display:'inline'}} src={require('../Assets/images/MySql.png')} />
                        <Header as='h2'>
                            {' '}DATABASES
                        </Header>
                        <p style={{fontSize:'1.2em'}}>Beyond coding, I am a strong advocate for diversity in the tech industry, especially for women.
                            I currently serve as President for Northeastern's women in tech club, NUWIT, and was a 2016 Grace Hopper Conference Scholar.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    );

};
export default WhatIDo
