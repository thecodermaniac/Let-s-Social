import axios from 'axios'

const url='http://localhost:5000/posts/getpost'

const url_post='http://localhost:5000/posts/createpost'

export const fetchpost=()=>axios.get(url)

export const createpost=(newpost)=>axios.post(url_post,newpost)