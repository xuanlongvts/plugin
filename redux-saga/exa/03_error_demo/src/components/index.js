import React from 'react'
import { connect } from 'react-redux';
import * as nameAct from '../consts';

const ErrorGenerator = ({ dispatch }) => {
    const action = type => dispatch({type});
    return(
        <p>
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_PUT)}>
                Action error in put
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_SELECT)}>
                Action error in select
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_CALL_SYNC)}>
                Action error in call sync
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_CALL_ASYNC)}>
                Action error in call async
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_CALL_INLINE)}>
                Action error in call inline
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_FORK)}>
                Action error in fork
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_SPAWN)}>
                Action error in spawn
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_ERROR_IN_RACE)}>
                Action error in race
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_CAUGHT_ERROR)}>
                Action caught error
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_INLINE_SAGA_ERROR)}>
                Action error in inlined saga
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_IN_DELEGATE_ERROR)}>
                Action error in delegated saga
            </button>
            {' '}
            <button onClick={() => action(nameAct.ACTION_FUNCTION_EXPRESSION_ERROR)}>
                Action error in saga as function expression 
            </button>
        </p>
    )
} 

export default connect()(ErrorGenerator);
