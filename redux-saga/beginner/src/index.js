import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';
import {store, action} from './store/index';

function render(){
	ReactDOM.render(
		<Counter
			value={store.getState()}
			onIncrement={() => action('INCREMENT')}
			onDecrement={() => action('DECREMENT')}
			onIncrementAsync={() => action('INCREMENT_ASYNC')}
		/>,
		document.getElementById('root')
	)
}

render();
store.subscribe(render);