import React, { Component } from 'react';
import { Container, Grid,Segment} from 'semantic-ui-react'
import ResponsiveContainer from './ResponsiveContainer';
import '../stylesheets/HomePageLayout.css';
import ProfileCard from '../Components/ProfileCard';
import ProfileInfo from '../Components/ProfileInfo';
import WhatIDo from './WhatIDoLayout';
import Footer from '../Components/Footer';
import ProjectsGrid from './ProjectsLayout'

export default class HomePageLayout extends Component {

    render() {
        return (
            <ResponsiveContainer>
                <Segment id='About' style={{padding: '8em 0em'}} vertical>

                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <ProfileInfo/>
                            </Grid.Column>
                            <Grid.Column width={6} floated="right">
                                <ProfileCard/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <div id="What I do" className={"WhatIDo"} style={{padding:'8em 2em'}}>
                    <WhatIDo/>
                </div>
                <Segment style={{padding: '8em 0em'}} vertical>
                    <ProjectsGrid/>
                </Segment>
                <Segment inverted vertical style={{padding: '5em 0em'}}>
                    <Container>
                        <Footer/>
                    </Container>
                </Segment>


            </ResponsiveContainer>
        );

    }}
