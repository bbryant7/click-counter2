import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from "./actions/action.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Count for me BABYYY </h1>
      <img src="https://media.giphy.com/media/oD5jVVOW8sXYI/giphy.gif"/>
      <h2> Current Count: {this.props.count}</h2>
      <button onClick={ (e) => this.props.incrament()}> Count Up! </button>
      <button onClick={ (e) => this.props.decrament()}> Count Down! </button>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {count: state};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
