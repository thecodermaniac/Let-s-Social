import React, { useState, useEffect} from 'react'
import useStyles from './style';
import { TextField, Button, Paper } from '@material-ui/core' //ei gulo kintu ui components
import FileBase from 'react-file-base64'
import { useDispatch, useSelector} from 'react-redux'
import { createpost, updatePost } from '../../actions/posts'

function Form({ currentId, setCurrentId }) {
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatcher = useDispatch()
  const [postData, setpostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedfile: ''
  })
  const classes = useStyles()

  useEffect(() => {
    if (post) setpostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setpostData({ creator: '', title: '', message: '', tags: '', selectedfile: '' });
  };

  const handlesubmit = (e) => {
    e.preventDefault()
    if (currentId === 0) {
      dispatcher(createpost(postData))
      clear()
    }
    else {
      dispatcher(updatePost(currentId, postData))
      clear()
    }

  }
  return (
    <Paper className={classes.paper}>
      <form className={`${classes.root} ${classes.form}`} onSubmit={handlesubmit}>
        <h3>Add Post</h3>
        <TextField name='creator' variant="outlined" label='creator' fullWidth value={postData.creator} onChange={(e) => { setpostData({ ...postData, creator: e.target.value }) }} />
        <TextField name='title' variant="outlined" label='title' fullWidth value={postData.title} onChange={(e) => { setpostData({ ...postData, title: e.target.value }) }} />
        <TextField name='message' variant="outlined" label='message' fullWidth value={postData.message} onChange={(e) => { setpostData({ ...postData, message: e.target.value }) }} />
        <TextField name='tags' variant="outlined" label='tags' fullWidth value={postData.tags} onChange={(e) => { setpostData({ ...postData, tags: e.target.value }) }} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedfile: base64 })} /></div>
        <Button  color='secondary' fullWidth variant='contained' onClick={clear}>Clear</Button>
        <Button className={classes.buttonSubmit} variant="contained" color='primary' fullWidth type='submit'>Submit</Button>
      </form>
    </Paper>
  )
}

export default Form