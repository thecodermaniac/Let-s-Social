import axios from 'axios'

const url = 'https://let-s-social-eu99p1wld-thecodermaniac.vercel.app/posts'


axios.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const fetchpost = () => axios.get(`${url}/getpost`)

export const singlepost = (id) => axios.get(`${url}/${id}`)

export const createpost = (newpost) => axios.post(`${url}/createpost`, newpost) //newpost 1st arg...e just function arg ar 2nd arg ta backend er jonno

export const updatepost = (id, updatedPost) => axios.put(`${url}/${id}`, updatedPost)

export const deletepost = (id) => axios.delete(`${url}/delete/${id}`)

export const likepost = (id) => axios.put(`${url}/like/${id}`)

export const commentPost = (value, id) => axios.post(`${url}/${id}/commentPost`, { value })

const urluser = 'https://let-s-social-eu99p1wld-thecodermaniac.vercel.app/users'

export const signIn = (formData) => axios.post(`${urluser}/signin`, formData)
export const signUp = (formData) => axios.post(`${urluser}/signup`, formData)