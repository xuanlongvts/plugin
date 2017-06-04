import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {createLogger}from 'redux-logger';
import './index.css';
import App from './containers/App';
import reducer from './reducers/index';

//const store = createStore(reducer);

const store = createStore(reducer, {}, compose(
	applyMiddleware(createLogger()),
	window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)