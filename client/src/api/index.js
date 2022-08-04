import axios from 'axios'

const url='http://localhost:5000/posts'

export const fetchpost=()=>axios.get(`${url}/getpost`)

export const createpost=(newpost)=>axios.post(`${url}/createpost`,newpost)

export const updatepost=(id, updatedPost)=>axios.put(`${url}/${id}`,updatedPost)

export const deletepost=(id)=>axios.delete(`${url}/delete/${id}`)