import * as postsTypes from '../types/postsTypes';

const initionalState = {
    postsIsLoaded: false,
    posts: [],
    post: null,
    singleError: false,
}

export const homeReducer = ( state = initionalState, action ) => {
    switch ( action.type ) {
        case postsTypes.LOAD_POSTS: 
            return {
                ...state,
                post: null,
                posts: action.posts,
                postsIsLoaded: true,
            }
          case postsTypes.FETCH_SINGLE_POST_SUCESS:
            return {
              ...state,
              post: action.post,
              postsIsLoaded: true,
            }
          case postsTypes.FETCH_SINGLE_POST_ERROR: 
            return {
              ...state,
              singleError: true,
            }
        default: return state;
    }
}

export default homeReducer;