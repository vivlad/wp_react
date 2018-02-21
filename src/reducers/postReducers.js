import * as postsTypes from '../types/postsTypes';
import * as config from '../utils/config';

const initionalState = {
    postsIsLoaded: false,
    posts: [],
}

export const homeReducer = ( state = initionalState, action ) => {
    switch ( action.type ) {
        case postsTypes.LOAD_POSTS: 
            return {
                ...state,
                posts: action.posts,
                postsIsLoaded: true,
            }
        default: return state;
    }
}

export default homeReducer;