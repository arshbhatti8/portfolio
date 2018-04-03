import React, { Component } from 'react';
import { Responsive, Visibility} from 'semantic-ui-react'
import TypistBackground from './TypistBackground';
import PropTypes from 'prop-types';
import MenuBar from './MenuBar';
import Radium ,{StyleRoot} from 'radium';

class DesktopContainer extends Component {
    state = {};

    showFixedMenu = () => this.setState({ menuFixed: true });

    hideFixedMenu = () => this.setState({ menuFixed: false });

    render() {
        const { menuFixed } = this.state;
        const { children } = this.props;

        return (
            <StyleRoot>
            <Responsive {...Responsive.onlyComputer}>

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                    once={false}>

                    <MenuBar menuFixed={menuFixed}/>

                    <TypistBackground/>

                </Visibility>

                {children}

            </Responsive>
            </StyleRoot>
        );

    }
}
DesktopContainer.propTypes={
    children:PropTypes.node,
};
export default Radium(DesktopContainer);
