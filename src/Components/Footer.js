import React,{Component} from 'react';
import {Grid,Button,Header,Icon} from 'semantic-ui-react'


class Footer extends Component  {

    copyText=()=>{
        var element=document.getElementById('email');
        element.focus();
        element.select();
        document.execCommand("copy");

    };


    render() {


        return (
            <div>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column textAlign='center' width={5} floated='left'>
                            <Header inverted as='h2' content='Website made by'/>
                            <Header inverted as='h2' content='Arsh Bhatti'/>
                            <a target='_blank' href='https://www.facebook.com/arshbhatti8'>
                                <Icon name='facebook square' color='blue' size='huge'/>
                            </a>
                            <a target='_blank' href='https://www.github.com/arshbhatti8'>
                                <Icon name='github' color='grey' inverted size='huge'/>
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/arshbhatti'>
                                <Icon name='linkedin' color='olive' size='huge'/>
                            </a>

                            <Button
                                color='google plus'
                                icon='google'
                                animated
                                fluid
                                style={{fontSize: '2em'}}>
                                <Button.Content visible>
                                    Email
                                </Button.Content>
                                <p id='email' style={{display:'none'}}>
                                    arsh.bhatti8@gmail.com
                                </p>
                                <Button.Content hidden>
                                    arsh.bhatti8@gmail.com
                                </Button.Content>
                            </Button>

                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h2' inverted>About this website</Header>
                            <p style={{fontSize: '1.5em'}}>This website is made using React with JSX and ES6 syntax.
                                Install React's chrome extension to check out some of the components! Click this github
                                icon to check out
                                the repository for this project.</p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <a href='https://www.github.com/arshbhatti8/portfolio'><Icon size='massive' name='github'/></a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export default Footer;
