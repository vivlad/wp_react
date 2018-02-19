import * as homeTypes from '../types/homeTypes';
import * as config from '../utils/config';

export const loadPosts = ( payload ) => dispatch => {
    const loadPostsStarted = () => ({ type: homeTypes.LOAD_POSTS_STARTED });
    const loadPostsError = () => ({ type: homeTypes.LOAD_POSTS_ERROR });

    const baseURL = config.baseURL;
    const endpoint = '/posts/'; 
    const requestParams = {
        method: 'GET',
    };
    dispatch(loadPostsStarted());
    fetch( baseURL + endpoint, requestParams )
    .then( data => data.json() )
    .then( payload => {
        dispatch({
            type: homeTypes.LOAD_POSTS,
            posts: payload,
        });
    })
    .catch( () => dispatch(loadPostsError()) );
}

