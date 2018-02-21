import { combineReducers } from 'redux';
import postReducers from '../reducers/postReducers';

const reducers = combineReducers({
  postReducers: postReducers,
});

export default reducers;