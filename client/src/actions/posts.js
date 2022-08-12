import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchpost() //json respond ta destructure korchi ekhane ar onno sob jaigai
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error);
    }
}
export const getPost = (id) => async (dispatch) => {
    try {

        const { data } = await api.singlepost(id);

        dispatch({ type: 'FETCH_POST', payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createpost = (newpost) => async (dispatch) => {
    try {
        const { data } = await api.createpost(newpost)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatepost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deletepost = (id) => async (dispatch) => {
    try {
        await api.deletepost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likepost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likepost(id)
        dispatch({ type: 'LIKE', payload: data })
    } catch (error) {
        console.log(error);
    }
}