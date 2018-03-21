import React, { Component } from 'react';
import HomePageLayout from './Components/HomePageLayout';
import Spinner from './Components/Spinner';

class App extends Component {

    state={};
    constructor() {
        super();
        this.state={isloading:true}

    }
    componentDidMount() {
        this.setState({isloading: false})
    }
    render() {

      return (this.state.isloading ? <Spinner/>:<HomePageLayout/>

      )
  }
}

export default App;
