import React from 'react';
import {Card,Image,Button} from 'semantic-ui-react';
const ProfileCard = () => {
    return (
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
    );

}
export default ProfileCard;
