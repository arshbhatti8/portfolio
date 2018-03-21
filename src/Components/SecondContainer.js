import React , {Component} from 'react';
import {Segment,Grid,Header,Image} from 'semantic-ui-react';



class SecondContainer extends Component {
render(){
        return(
                <Grid>
                    <Grid.Row color="black" stretched>
                        <Grid.Column width={8}>
                            <Header as='h1' inverted style={{ fontSize: '3em' }}>Hi, my name is Arsh Bhatti</Header>
                            <p style={{ fontSize: '1.33em',color:'white' }}>
                                I'm a design-minded, detail oriented software engineer passionate about combining beautiful code with beautiful design.
                            </p>
                            <p style={{ fontSize: '1.33em',color:'white' }}>
                                Lorem ipsum dolor sit amet, pellentesque duis, suspendisse amet sed auctor mauris, eget phasellus convallis arcu.
                                Nascetur officiis sed ut integer cum, mauris tortor fringilla id sit quam lorem. Diam sagittis diam cras proin ut eleifend.
                                Dolor at quam congue parturient, non penatibus.
                                Dui metus sit erat quis, et sit varius hymenaeos, massa libero eleifend maecenas neque fringilla, odio mauris sapien a lectus.
                                Ac architecto, suspendisse justo viverra integer odio phasellus non, eu vehicula tempus ipsum dictum massa id, laoreet varius tincidunt suspendisse in, orci turpis eleifend ut duis.
                                Diam erat in auctor libero, fusce in cum sed, mauris adipiscing, adipiscing dictum gravida sed, egestas ante eros.
                                Massa lorem duis ipsum vel, pellentesque ipsum justo odio ut imperdiet nulla, in neque blandit elit, lacus pulvinar.
                                Vestibulum neque eget nec quis, urna nulla aptent quam, aliquet sagittis nam sed, viverra est metus leo luctus donec. Pellentesque sollicitudin. Metus nulla nullam nibh venenatis augue dolor, pellentesque est velit id ac massa libero, ut sit, bibendum leo. Ante pretium wisi imperdiet nec, tincidunt iaculis, est sem.

                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image
                                bordered
                                rounded
                                size='large'
                                src={require("../Assets/images/SJSU2.jpg")}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        );
    }
}

export default SecondContainer;