// Connect API
import * as api from '../../api';
import { AUTH } from './types.js';

// Actions
export const signIn = (formData, history) => async (dispatch) => {
    try {
        // const { data } = await api.fetchPosts();
        // dispatch({ type: FETCH_ALL, payload: data });
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};

export const signUp = (formData, history) => async (dispatch) => {
    try {
        // const { data } = await api.fetchPosts();
        // dispatch({ type: FETCH_ALL, payload: data });
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};
