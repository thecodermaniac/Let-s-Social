import React, {useEffect}from 'react'
import NavBar from './components/NavBar/NavBar'
import {Container, Grid} from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import {getPosts} from './actions/posts'

import {useDispatch} from 'react-redux'

function App() {
  const dispatcher= useDispatch()

  useEffect(() => {
    dispatcher(getPosts())
  }, [])
  
  return (
    <>
    <NavBar/>
    <Container>
    <Grid container
  justifyContent="center"
  alignItems="stretch">
      <Grid item xs={12} sm={7}>
        <Posts/>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Form/>
      </Grid>
    </Grid>
    </Container>
    </>
  )
}

export default App