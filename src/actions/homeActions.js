import * as homeTypes from '../types/homeTypes';

export const loadPosts = ( payload ) => ({
    type: homeTypes.LOAD_POSTS,
    data: payload,
});