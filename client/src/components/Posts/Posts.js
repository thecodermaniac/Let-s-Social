import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './style';

function Posts({ setCurrentId }) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts)
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
           <Grid className={classes.mainContainer} container alignItems="stretch" spacing={1}>
            {
            posts.map((post)=>(
                <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                </Grid>
            ))
           }
           </Grid>
        )
    )
}

export default Posts