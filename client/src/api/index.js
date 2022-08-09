import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchpost = () => axios.get(`${url}/getpost`)

export const createpost = (newpost) => axios.post(`${url}/createpost`, newpost) //newpost 1st arg...e just function arg ar 2nd arg ta backend er jonno

export const updatepost = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost)

export const deletepost = (id) => axios.delete(`${url}/delete/${id}`)

export const likepost = (id) => axios.put(`${url}/like/${id}`)

const urluser = 'http://localhost:5000/users'

export const signIn = (formData) => axios.post(`${urluser}/signin`, formData)
export const signUp = (formData) => axios.post(`${urluser}/signup`, formData)