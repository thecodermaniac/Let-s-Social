import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Container } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Auth from './components/Auth/Auth'


import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Router>
        <Container maxWidth="lg">
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/auth'>
              <Auth />
            </Route>
          </Switch>
        </Container>

      </Router>
    </>
  )
}

export default App