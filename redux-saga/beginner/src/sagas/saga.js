import {delay} from 'redux-saga';
import {put, takeEvery, all} from 'redux-saga/effects';

export function* HelloSaga(){
	console.log('Hello saga');
}

export function* inCrementAsnc(){
	yield delay(2000);
	yield put({type: 'INCREMENT'});
}

export function* watchIncrementAsync(){
	yield takeEvery('INCREMENT_ASYNC', inCrementAsnc);
}

export default function* rootSaga(){
	yield all([
		HelloSaga(),
		watchIncrementAsync()
	])
}