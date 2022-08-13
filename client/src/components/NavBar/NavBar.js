import React,{useState} from 'react'
import usestyle from './style'
import { AppBar, Toolbar, Avatar, Button,Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = usestyle()
  const logout=()=>{
    console.log('pressed');
    localStorage.removeItem('profile')
    setUser(null)
  }
  return (
    <AppBar className={classes.appBar} position='static' color='inherit' style={{flexDirection:'row'}}>
      <Typography variant='h4' className={classes.heading} >Let's Social</Typography>

      <Toolbar className={classes.toolbar}>
        {user ? (<div className={classes.profile}>
          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl} style={{marginRight:"12px"}}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6" style={{marginRight:"12px"}}>{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button></div>) :
          (<Link to='/auth'><Button variant='contained' color='primary'>Sign In</Button></Link>)}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar