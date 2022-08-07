import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import Posts from '../../components/Posts/Posts'
import Form from '../../components/Form/Form'
import { getPosts } from '../../actions/posts'
import style from './style'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
    const postlength = useSelector((state) => state.posts.length);
    const classes = style()
    const [currentId, setCurrentId] = useState(0);
    const dispatcher = useDispatch()

    useEffect(() => {
        dispatcher(getPosts())
    }, [currentId, dispatcher, postlength])

    return (
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
    )
}

export default Home