import React from 'react';
import '../stylesheets/Projects.css'
import {Button,Icon,Image} from 'semantic-ui-react';
import heroku from '../Assets/images/heroku.png'
const ProjectInfo  = (props) => {
    return (
        <div>
            <h1 style={{fontSize:'2.5em'}}>{props.header}</h1>
            <p style={{fontSize:'1.2em'}}>{props.paragraph}</p>
            <a target="_blank"
               href={props.ssa? 'https://www.github.com/arshbhatti8/ssa':'https://www.github.com/arshbhatti8/nursingsurvey'}>
                <Button color="blue" animated>
                    <Button.Content visible >
                        <Icon size='huge' color='yellow' name='github'/>
                    </Button.Content>
                    <Button.Content hidden style={{fontSize:"1.5em",fontWeight:"bold"}}>
                        GITHUB
                    </Button.Content>
                </Button></a>
            <a target="_blank"
               href={props.ssa? "https://sikh-student-association.herokuapp.com":"https://nursingsurvey.herokuapp.com"}>
                <Button color="blue" animated>
                    <Button.Content visible >
                        <Image src={heroku} style={{height:'58px',width:'64px',display:'inline',backgroundColor:'gold',borderRadius:'10%'}}/>
                    </Button.Content>
                    <Button.Content hidden style={{fontSize:"1.5em",fontWeight:"bold"}}>
                        HEROKU
                    </Button.Content>
                </Button></a>
        </div>
    );

};
export default ProjectInfo
