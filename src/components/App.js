import React, { Component } from 'react'
import { handleInitialDataAction } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './dashboard'
class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialDataAction())
  }
  render() {
    return (
      <div>
        {this.props.authedUser === true ? null 
          : <Dashboard />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }){
  return{
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)