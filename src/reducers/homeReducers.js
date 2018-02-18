import * as homeTypes from '../types/homeTypes';

const initionalState = {
    posts: {}
}

export const homeReducer = ( state = initionalState, action ) => {
    switch ( action.type ) {
        case homeTypes.LOAD_POSTS: 
        return {
            ...state,
            posts: action.posts,
        }
        default: return state;
    }
}

export default homeReducer;