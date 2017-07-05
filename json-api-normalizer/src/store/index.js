import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import api from '../middlewares/api';

const middlewareArr = [];
middlewareArr.push(thunk);
middlewareArr.push(api);

const configureStore = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewareArr))
);

export default configureStore;