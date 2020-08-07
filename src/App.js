import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
const Styles = styled.div`

`
class App extends React.Component {

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(userData => {
      // this.props.fetchUsers(userData)
      console.log(userData)
    })
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
            <Route exact path='/login'>
              <SignUp />
            </Route>
            <Route exact path='/signup'>
              <Login />
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
