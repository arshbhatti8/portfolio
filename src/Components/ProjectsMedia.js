import React from 'react';
import {Image} from 'semantic-ui-react';
import MacbookSsa from '../Assets/images/macAndIphone.png';
import MacbookNursing from '../Assets/images/macBook-Charts.png'
import Chart1 from '../Assets/images/chart1.png';
import Chart2 from '../Assets/images/chart2.png'
import '../stylesheets/Projects.css';

const Projects = (props) => {
    return (
        <div>
            <Image src={props.ssa? MacbookSsa:MacbookNursing}/>
            <Image size="medium" className="chart1" src={props.nursing? Chart2:null}/>
            <Image size="medium" className="chart1" src={props.nursing? Chart1:null}/>
        </div>
    );

};


export default Projects;
