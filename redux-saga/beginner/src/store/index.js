import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers/reducers';
import rootSaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const action = type => store.dispatch({type});