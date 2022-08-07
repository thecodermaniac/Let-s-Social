import React from 'react'
import usestyle from './style'
import { AppBar, Toolbar, Avatar, Button,Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar() {
  const user = null
  const classes = usestyle()
  return (
    <AppBar className={classes.appBar} position='static' color='inherit' style={{flexDirection:'row'}}>
      <Typography variant='h4' className={classes.heading}>Let's Social</Typography>

      <Toolbar className={classes.toolbar}>
        {user ? (<div className={classes.profile}>
          <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
          <h4 className={classes.userName}>Let's Social</h4>
          <Button variant="contained" className={classes.logout} color="secondary">Logout</Button></div>) :
          (<Link to='/auth'><Button variant='contained' color='primary'>Sign In</Button></Link>)}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar