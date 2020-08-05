import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import Navbar from './components/Navbar'
const Styles = styled.div`

`
class App extends React.Component {
  state={
    navType: '0'
  }
  render(){
    return (
      <Styles>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Styles>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchUsers: (users) => dispatch({ type: 'FETCH_USERS', users: users }),
    // setLoggedIn: (user) => dispatch({type: 'SET_LOGIN', user: user}),
    // fetchDatasets: (datasets) => dispatch({type: 'FETCH_DATASETS', datasets: datasets})
  }
}
const mapStateToProps = (state) => {
  return {
    // current_user: state.userReducer.current_user,
    // users: state.userReducer.users,
    // isLoggedIn: state.userReducer.isLoggedIn,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
