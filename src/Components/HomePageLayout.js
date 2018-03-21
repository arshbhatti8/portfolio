import React, { Component } from 'react';
import { Container, Grid, Image,Button, List,Divider,Segment,Header,Icon,Card,Label} from 'semantic-ui-react'
import ResponsiveContainer from './ResponsiveContainer';
import '../stylesheets/HomePageLayout.css';

export default class HomePageLayout extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
    };

    render() {
        return (
            <ResponsiveContainer>
                <Segment id='About' style={{padding: '8em 0em'}} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h1' style={{fontSize: '3em'}}>Hi, I'm Arsh Bhatti</Header>
                                <Header as='h2' style={{fontSize: '1.3em'}}>I'm a design-minded,
                                    detail oriented software engineer passionate about combining beautiful code with beautiful design.
                                </Header>
                                <p style={{fontSize:'1.2em'}}>
                                    <strong>I'm a Master's student at San Jose State University, studying Software Engineering.</strong> I have experience developing and designing software for the web, from simple landing pages to progressive web applications. I strive to create software that not only functions efficiently under the hood, but also provides intuitive, pixel-perfect user experiences.

                                    <br/><br/>I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. I consider work an ongoing education, and I'm always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.

                                    <br/><br/>When I'm not in front of a computer screen, I'm probably dancing with with my team : Bhangra Empire.
                                </p>
                                <form method='get' action={require('../Assets/Arshpreet_Bhatti-Web Development.pdf')}>
                                <Button color='red' size='huge' animated='vertical'>
                                    <Button.Content visible>
                                        Download Resume
                                    </Button.Content>
                                    <Button.Content hidden>

                                            <Icon size='large' name='download'/>
                                    </Button.Content>
                                </Button>
                                </form>
                            </Grid.Column>
                            <Grid.Column width={6} floated="right">
                                <Card raised centered>
                                    <Image src={require('../Assets/images/profile.jpg')} />
                                    <Card.Content>
                                        <Card.Header>Arsh Bhatti</Card.Header>
                                        <Card.Meta>Connect with me on:</Card.Meta>
                                        <Card.Description>
                                            <Button circular size='massive'  color='linkedin' icon='linkedin'/>
                                            <Button circular size='massive' color='black' icon='github'/>
                                            <Button circular size='massive' color='google plus' icon='google plus'/>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Segment>

                <div id="What I do" className={"WhatIDo"} style={{padding:'8em 2em'}}>

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
                            <Grid.Column width={8} >
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
                <Segment style={{padding: '8em 0em'}} vertical>
                    <Grid container verticalAlign='middle' relaxed stackable>
                        <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column fluid width={16} >

                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Grid>
                </Segment>
                <Segment inverted vertical style={{padding: '5em 0em'}}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='About the website'/>
                                    <List link inverted>
                                        <List.Item as='a'>Sitemap</List.Item>
                                        <List.Item as='a'>Contact Us</List.Item>
                                        <List.Item as='a'>Religious Ceremonies</List.Item>
                                        <List.Item as='a'>Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Services'/>
                                    <List link inverted>
                                        <List.Item as='a'>Banana Pre-Order</List.Item>
                                        <List.Item as='a'>DNA FAQ</List.Item>
                                        <List.Item as='a'>How To Access</List.Item>
                                        <List.Item as='a'>Favorite X-Men</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>About this website</Header>
                                    <p>This website is written in React with ES6 and JSX syntax. Install the react chrome extension to check some of the components </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>


            </ResponsiveContainer>
        );

    }}
