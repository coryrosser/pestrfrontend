import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import Navbar from './components/Navbar'
const Styles = styled.div`

font-family: 'Roboto', sans-serif;
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
export default App;
