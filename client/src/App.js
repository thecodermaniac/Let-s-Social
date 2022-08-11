import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Container } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Auth from './components/Auth/Auth'


import Home from './components/Home/Home'

function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <>
      <Router>
        <Container maxWidth="lg">
          <NavBar />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to="/" />)} />
          </Switch>
        </Container>

      </Router>
    </>
  )
}

export default App