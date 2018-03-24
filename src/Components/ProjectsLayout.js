import React,{Component} from 'react';
import {Grid,Sticky,Image,Header} from 'semantic-ui-react';
import ProjectMedia from './ProjectsMedia';
import ProjectInfo from  './ProjectInfo';
import '../stylesheets/Projects.css';
import projectsText from '../Assets/images/project-logo5.png'

class ProjectsGrid extends Component {
    state={};

    handleContextRef=(contextRef)=>{
      this.setState({contextRef})
    };


    render(){
        const {contextRef}=this.state;

    return (
        <div ref={this.handleContextRef} >
            <Grid stackable>
            <Grid.Row columns={3}>
                <Grid.Column width={3} floated="left">
                    <Sticky pushing context={contextRef}>
                        <Image id='projectsBanner' src={projectsText} />
                    </Sticky>
                </Grid.Column>
                <Grid.Column width={10} floated="right">
                    <ProjectMedia ssa/>
                </Grid.Column>
                <Grid.Column id='rightColumn' width={3} floated="right">
                    <ProjectInfo
                        header="Sikh Student Association Website"
                        paragraph="A web application a student organization at San Jose State University
                        The website was based on HTML5, CSS3 and Bootstrap"
                        ssa/>
                </Grid.Column>
            </Grid.Row>

                <Grid.Row style={{padding:'12em 0em'}} columns={3}>
                    <Grid.Column width={2} floated="left">
                    </Grid.Column>
                    <Grid.Column textAlign='center' width={10} floated="right">
                        <ProjectMedia nursing/>
                    </Grid.Column>
                    <Grid.Column width={3} floated="left">
                        <ProjectInfo
                        header="Nursing Survey Website"
                        paragraph="A React JS based website that uses
                        React Charts 2 for displaying the results of a survey conducted by a student of Nursing Majors. "
                        nursing/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

};}
export default ProjectsGrid
