import React, {Component} from 'react';
import Typist from 'react-typist';
import  '../stylesheets/typist.css';



class TypeWriter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        };
    }
    onTypingDone = () => {
        this.setState(
            {
                text: null
            },
            () =>
                // run this callback after the state updates
                this.setState({
                    text: this.props.text
                })
        );
    };

render() {
    const  { text }  = this.state;
        return(
            text&&
            (
                <div className={"TypistExample"} >

                    <Typist
                        cursor={{show: false}}
                        className={"TypistExample-header"}
                        onTypingDone={this.onTypingDone}>
                    <Typist.Delay ms={1000} />
                    {
                        text.map((i, index) => {
                        return (

                            <div key={index}>

                                <h1>{i}</h1>
                                {<Typist.Backspace count={12} delay={1000} />}

                            </div>
                        );
                    }
                    )}
                    </Typist>
            </div>
            ));
    }
}
export default TypeWriter;
