import React, { Component } from 'react';
import '../App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Display from './Display';
import ButtonContainer from './ButtonContainer';
import {updateInput} from "../actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display input={this.props.input}/>
        <ButtonContainer/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateInput}, dispatch)
}

function mapPropsToState(state) {
    return {
        input: state.input
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(App);
