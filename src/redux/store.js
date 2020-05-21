import { createStore, applyMiddleware } from 'redux';
// whenever actions get fired, we can catch them and display them
import logger from 'redux-logger';

import rootReducer from './root-reducer';
//Add Here
const middlewares = [logger];
// could use logger instead of ...middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
