import * as homeTypes from '../types/homeTypes';
import * as config from '../utils/config';

const initionalState = {
    postsIsLoaded: false,
    posts: [],
    baseURL: config.baseURL,
}

export const homeReducer = ( state = initionalState, action ) => {
    switch ( action.type ) {
        case homeTypes.LOAD_POSTS: 
            return {
                ...state,
                posts: action.posts,
                postsIsLoaded: true,
            }
        default: return state;
    }
}

export default homeReducer;