import { combineReducers } from "redux";
import posts from './postsreducer'
import auth from './auth'

export default combineReducers({
    posts, auth
})