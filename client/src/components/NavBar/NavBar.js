import React from 'react'
import usestyle from './style'
import {Container,AppBar} from '@material-ui/core'

function NavBar() {
const classes=usestyle()
  return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
           <h2 className={classes.heading}>Let's Social</h2>
        </AppBar>
    </Container>
  )
}

export default NavBar