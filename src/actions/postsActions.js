import * as postsTypes from '../types/postsTypes';
import * as config from '../utils/config';

export const loadPosts = ( payload ) => dispatch => {
    const loadPostsStarted = () => ({ type: postsTypes.LOAD_POSTS_STARTED });
    const loadPostsError = () => ({ type: postsTypes.LOAD_POSTS_ERROR });

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
              type: postsTypes.LOAD_POSTS,
              posts: payload,
          });
      })
      .catch( () => dispatch(loadPostsError()) );
}

export const loadSinglePost = ( id ) => dispatch => {
  const fetchSinglePostStarted = () => ({ type: postsTypes.FETCH_SINGLE_POST_STARTED });
  const fetchSinglePostError = (err) => ({ type: postsTypes.FETCH_SINGLE_POST_ERROR, err });

  const baseURL = config.baseURL;
  const endpoint = `/posts/${id}`; 
  const requestParams = {
      method: 'GET',
  };
  dispatch( fetchSinglePostStarted() );
  fetch( baseURL + endpoint, requestParams )
    .then( data => data.json() )
    .then( payload => {
      dispatch({
        type: postsTypes.FETCH_SINGLE_POST_SUCESS,
        post: payload,
      });
    })
    .catch( err =>  dispatch(fetchSinglePostError(err)) );
}