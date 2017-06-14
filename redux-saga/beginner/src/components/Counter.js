import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const Counter = ({value, onIncrement, onDecrement, onIncrementAsync}) => (
	<div>
		{' '}
		<button onClick={onIncrementAsync}>
			Incremnent after 2 second
		</button>
		{' '}
		<button onClick={onIncrement}>
			Incremnent
		</button>
		{' '}
		<button onClick={onDecrement}>
			Decrement
		</button>
		<hr />
		<div>
			Click {value} times
		</div>
	</div>
);

Counter.proptypes = {
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onIncrementAsync: PropTypes.func.isRequired
}

export default Counter;