import React from 'react'
import useStyles from './style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deletepost, likepost } from '../../../actions/posts';

function Post({ post, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const Likes = () => { //eta ar ekta component jeta onno jaigai kora jeto but ekhane kora 
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  }
  const openPost = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/posts/post/${post._id}`);
  };

  return (
    <Card className={classes.card}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedfile} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          {(user?.result?._id === post?.creator) && (<Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)} disabled={!user?.result}><MoreHorizIcon fontSize="default" /></Button>)}
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likepost(post._id))}><Likes /></Button>
        {(user?.result?._id === post?.creator) && (<Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(deletepost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>)}
      </CardActions>
    </Card>
  )
}

export default Post