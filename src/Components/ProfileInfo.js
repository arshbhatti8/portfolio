import React from 'react';
import {Header,Button,Icon} from 'semantic-ui-react';


const ProfileInfo = () => {
    return (
        <div>
            <Header as='h1' style={{fontSize: '3em'}}>Hi, My name is Arsh Bhatti</Header>
            <Header as='h2' style={{fontSize: '1.3em'}}>I'm a design-minded,
                detail oriented software engineer passionate about combining beautiful code with beautiful design.
            </Header>
            <p style={{fontSize:'1.2em'}}>
                <strong>A Master's student at San Jose State University, studying Software Engineering,</strong> I have experience developing and designing software for the web, from simple landing pages to progressive web applications. I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.

                <br/><br/>I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.

                <br/><br/>When I'm not in front of a computer screen, I'm probably dancing with with my team : Bhangra Empire.
            </p>
            <a href={require("../Assets/Arshpreet_Bhatti-Web Development.docx")}
               download>
            <Button color='red' size='huge' animated='vertical'>
            <Button.Content visible>
                Download Resume
            </Button.Content>
            <Button.Content hidden>
                <Icon size='large' name='download'/>
            </Button.Content>
            </Button>
            </a>
         </div>
    );

};

export default ProfileInfo;
