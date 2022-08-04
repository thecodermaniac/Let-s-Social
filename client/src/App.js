import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Container, Grid } from '@material-ui/core'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { getPosts } from './actions/posts'
import style from './style'

import { useDispatch } from 'react-redux'

function App() {
  const classes=style()
  const [currentId, setCurrentId] = useState(0);
  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(getPosts())
  }, [currentId, dispatcher])

  return (
    <>
      <NavBar />
      <Container>
        <Grid className={classes.mainContainer} container
          justifyContent="center"
          alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7} >
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App