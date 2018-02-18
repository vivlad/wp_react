import * as homeTypes from '../types/homeTypes';

export const loadPosts = ( payload ) => ({
    type: homeTypes.LOAD_POSTS,
    posts: payload,
});

export const loadImages = ( id, imageData ) => ({
    type: homeTypes.LOAD_IMAGES,
    imageData,
    id,
});