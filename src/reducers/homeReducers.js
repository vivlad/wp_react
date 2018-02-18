import * as homeTypes from '../types/homeTypes';

const initionalState = {
    postsIsLoaded: false,
    posts: [],
    baseURL: 'http://bumburmyaka.esy.es/wp-json/wp/v2',
}

export const homeReducer = ( state = initionalState, action ) => {
    switch ( action.type ) {
        case homeTypes.LOAD_POSTS: 
            return {
                ...state,
                posts: action.posts,
                postsIsLoaded: true,
            }
        case homeTypes.LOAD_IMAGES:
            return {
                ...state,
                posts: state.posts.map(
                    (item, idx) => ( 
                        action.id === idx ? 
                        {...item, featImage: action.imageData} 
                        : 
                        item
                    )
                )
            };
        default: return state;
    }
}

export default homeReducer;