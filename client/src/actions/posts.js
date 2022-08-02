import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const {data}= await api.fetchpost()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const createpost=(newpost)=> async (dispatch)=>{
    try {
        const {data} = await api.createpost(newpost)
        dispatch({type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

