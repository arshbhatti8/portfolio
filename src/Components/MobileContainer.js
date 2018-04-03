import React , {Component} from 'react';
import {Responsive, Sidebar,Menu,Visibility,Container,Icon,Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Parallax from './TypistBackground'
import Radium ,{StyleRoot} from 'radium';

const menuStyle = {
    border: 'none',
    padding:0,
    boxShadow: 'none',
    margin:0,

};
class mobileContainer extends Component {
    state = {};

    handlePusherClick = () => {
        const {sidebarOpened} =this.state;
        if(sidebarOpened) this.setState({sidebarOpened:false})
    };

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    items= [{ key: 'Home', name: 'Home'},
        { key: 'Charts', name: 'Charts'},
        { key: 'References', name: 'References' }];

    render(){
        const { children } = this.props;
        const { sidebarOpened } = this.state;
        const {activeItem}=this.state;
        return(
            <StyleRoot><Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        inverted
                        vertical
                        visible={sidebarOpened}>
                        {
                            this.items.map(item=>{
                                return<Menu.Item
                                    inverted
                                    name={item.name}
                                    as='a'
                                    onClick={this.handleItemClick}
                                    active={activeItem === item.name}/>
                            })
                        }
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{ minHeight: '100vh' }}>
                        <Visibility
                            onBottomPassed={this.showFixedMenu}
                            onBottomPassedReverse={this.hideFixedMenu}
                            once={false}>
                            <Segment inverted textAlign='center' style={{ minHeight: 50, padding: '1em 0em' }} vertical>
                            <Container>
                                <Menu
                                    pointing
                                    secondary
                                    style={menuStyle}
                                    size='large'>
                                    <Menu.Item
                                        onClick={this.handleToggle}>
                                        <Icon style={{color:'#FFDF00'}} name='sidebar' />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            </Segment>
                        <Parallax/>
                    </Visibility>
                        {children}
                    </Sidebar.Pusher>

                </Sidebar.Pushable>
            </Responsive></StyleRoot>
        );
    }
}
mobileContainer.propTypes={
    children:PropTypes.node,
};


export default Radium(mobileContainer);