import axios from 'axios'

const url='http://localhost:5000/posts/getpost'

export const fetchpost=()=>axios.get(url)