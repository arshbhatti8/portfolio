import React, { Component } from 'react';
import HomePageLayout from './Components/HomePageLayout';
import Spinner from "./Components/loadingSpinner";


class App extends Component {

    state={};
    constructor() {
        super();
        this.state={isloading:true}

    }
    componentDidMount() {
        setTimeout(()=> this.setState({isloading: false}),3000);
    }
    render() {

      return (this.state.isloading ? <Spinner/>:<HomePageLayout/>

      )
  }
}

export default App;
