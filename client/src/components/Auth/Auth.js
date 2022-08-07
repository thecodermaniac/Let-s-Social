import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from './style';

function Auth() {
    const classes = useStyles
  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>

        </Paper>

    </Container>
  )
}

export default Auth