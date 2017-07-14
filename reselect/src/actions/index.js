import axios from 'axios';
import {
    FETCH_POSTS,
    SELECT_POST,
    DESELECT_POST
} from './types';

export const fetchPosts = () => {
    const request = axios.get("http://jsonplaceholder.typicode.com/posts");
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export const selectPost = id => {
    return {
        type: SELECT_POST,
        payload: id
    }
}

export const deselectPost = id => {
    return {
        type: DESELECT_POST,
        payload: id
    }
}