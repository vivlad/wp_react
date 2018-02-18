import { combineReducers } from 'redux';
import homeReducers from '../reducers/homeReducers';

const reducers = combineReducers({
    homeReducers: homeReducers,
});

export default reducers;