import React from 'react';
import '../stylesheets/Projects.css'

const ProjectInfo  = (props) => {
    return (
        <div>
            <h1 style={{fontSize:'2.5em'}}>{props.header}</h1>
            <p style={{fontSize:'1.2em'}}>{props.paragraph}</p>
        </div>
    );

};
export default ProjectInfo
