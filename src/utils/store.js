import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    createLogger({ collapsed: true }),
  ),
);

export default store;