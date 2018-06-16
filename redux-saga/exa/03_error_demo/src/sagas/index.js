import { call, put, takeEvery, all, race, fork, spawn, take, select } from 'redux-saga/effects'
import { errorGeneratorSelector } from '../reducers/'
import * as nameAct from '../consts';

const delay = ms => new Promise(res => setTimeout(res, ms));


function* errorInPutSaga(){
    yield delay(1000);
    yield put({
        type: nameAct.ACTION_ERROR_IN_PUT
    })
}

function* errorInSelectSaga(){
    yield delay(100);
    yield select(errorGeneratorSelector);
}

function* throwAnErrorSaga(){
    yield delay(1000);
}

function* inlinedSagaName(){
    while(true){
        yield take(nameAct.ACTION_INLINE_SAGA_ERROR);
        yield call(throwAnErrorSaga);
    }
}

function* errorInRaceSaga(){
    yield delay(1000);
    const raceTest = yield race({
        error: call(throwAnErrorSaga),
        ok: delay(3000)
    });
    console.log('race finish: ', raceTest);
}

function* errorInSpawnSaga(){
    yield delay(100);
    yield spawn(throwAnErrorSaga);
}

export default function* rootSaga(){
    yield all([
        takeEvery(nameAct.ACTION_ERROR_IN_PUT, errorInPutSaga),
        takeEvery(nameAct.ACTION_ERROR_IN_SELECT, errorInSelectSaga),
        takeEvery(nameAct.ACTION_ERROR_IN_RACE, errorInRaceSaga),
        takeEvery(nameAct.ACTION_ERROR_IN_SPAWN, errorInSpawnSaga),
        fork(inlinedSagaName)
    ]);
}