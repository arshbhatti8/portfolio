import React from 'react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';


const responsiveContainer = (props) => (
    <div>
        <DesktopContainer>{props.children}</DesktopContainer>
        <MobileContainer>{props.children}</MobileContainer>
    </div>
);



export default responsiveContainer;