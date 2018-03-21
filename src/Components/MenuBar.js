import React from 'react';
import {Image, Menu,Container} from 'semantic-ui-react';


const menuStyle = {
    border: 'none',
    padding:0,
    boxShadow: 'none',
    margin:0,

};

const items=[{name:'Intro',key:"123"},
    {name:'About',key:"456"},
    {name:'What I do',key:"789"}];

const MenuBar = (props) => {
    return (

            <Menu
                borderless
                fixed={props.menuFixed ? 'top':null}
                style={menuStyle}
                inverted
                pointing
                size="huge">
                <Menu.Item>
                    <Image size='mini' src={require('../images/logo.png')} />
                </Menu.Item >
                <Container>
                    {
                        items.map((i,index)=>
                        {
                            return<Menu.Item
                                as='a'
                                inverted
                                href={'#'+i.name}
                                name={i.name}
                                onClick={props.handleItemClick}
                                key={index}
                            />

                        }
                        )
                    }
                </Container>
            </Menu>

    );

};
export default MenuBar;
