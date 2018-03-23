import React from 'react';
import {Grid,Button,Header,Icon} from 'semantic-ui-react'
const Footer = () => {
    return (
        <div>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={5} floated='left'>
                        <Header inverted as='h2' content='Website facilitated by'/>
                        <Header inverted as='h2' content='Arsh Bhatti'/>
                        <a target='_blank' href='https://www.facebook.com/arshbhatti8'>
                            <Icon name='facebook square' color='blue' size='huge'/>
                        </a>
                        <a target='_blank' href='https://www.github.com/arshbhatti8'>
                            <Icon name='github' color='grey' inverted size='huge'/>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/arshbhatti'>
                            <Icon name='linkedin' color='olive'  size='huge'/>
                        </a>
                        //TODO: This button does not display right now !
                        <Button
                            color='google plus'
                            icon='google'
                            animated='fade'
                            fluid
                            style={{fontSize:'2em'}}>
                            <Button.Content visible >
                                Email
                            </Button.Content>
                            <Button.Content hidden>
                                arsh.bhatti8@gmail.com
                            </Button.Content>
                        </Button>

                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h2' inverted>About this website</Header>
                        <p style={{fontSize:'1.5em'}}>This website is made using React with JSX and ES6 syntax. Install React's chrome extension to check out some of the components!</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );

}
export default Footer
