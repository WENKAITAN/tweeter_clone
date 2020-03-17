import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialDataAction } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './newTweet'
import TweetPage from './tweetPage'
import Nav from './nav'



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialDataAction())
  }
  render() {
    return (
      <Router>
        <fragment>
          <LoadingBar />
          <div>
            <Nav />
            {this.props.authedUser === true ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} />
                </div>}
          </div>          
        </fragment>
      </Router>

    )
  }
}

function mapStateToProps({ authedUser }){
  return{
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)