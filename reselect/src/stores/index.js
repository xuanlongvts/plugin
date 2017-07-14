import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducers from '../reducers/index';

const store = createStore(rootReducers, applyMiddleware(ReduxPromise));

export default store;
