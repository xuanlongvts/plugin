import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  CANCEL_INCREMENT_ASYNC
} from '../const'

const Counter = ({counter, countdown, dispatch}) => {
    const action = (type, value) => () => dispatch({
        type,
        value
    });
    return (
        <div className="counterWra">
            Clicked: {counter} times  {' '}
            <button onClick={action(INCREMENT)}>+</button>{' '}
            <button onClick={action(DECREMENT)}>-</button>{' '}
            <button onClick={action(INCREMENT_IF_ODD)}>
                Increment if odd
            </button>{' '}
            <button style={{color: countdown ? 'red' : 'black'}}
                onClick={countdown ? action(CANCEL_INCREMENT_ASYNC) : action(INCREMENT_ASYNC, 5)}
            >
                {countdown ? `Cancel increment (${countdown})` : `increment after 5s`}
            </button>
        </div>
    )
}

Counter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    countdown: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        countdown: state.countdown,
    }
}

export default connect(mapStateToProps)(Counter);
