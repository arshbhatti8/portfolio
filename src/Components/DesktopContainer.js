import React, { Component } from 'react';
import { Responsive, Visibility} from 'semantic-ui-react'
import Parallax from './TypistBackground';
import PropTypes from 'prop-types';
import MenuBar from './MenuBar';

class DesktopContainer extends Component {
    state = {};

    showFixedMenu = () => this.setState({ menuFixed: true });

    hideFixedMenu = () => this.setState({ menuFixed: false });

    render() {
        const { menuFixed } = this.state;
        const { children } = this.props;

        return (
            <Responsive {...Responsive.onlyComputer}>

                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                    once={false}>

                    <MenuBar menuFixed={menuFixed}/>

                    <Parallax/>

                </Visibility>

                {children}

            </Responsive>
        );

    }
}
DesktopContainer.propTypes={
    children:PropTypes.node,
};
export default DesktopContainer;
