import { take, put, call, fork, race, cancelled } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { INCREMENT_ASYNC, INCREMENT, CANCEL_INCREMENT_ASYNC, COUNTDOWN_TERMINATED } from '../const';


const action = type => ({type});

export const countdown = secs => {
    console.log('countdown: ', secs);
    return eventChannel(listener => {
        const iv = setInterval(() => {
            secs -= 1;
            console.log('countdown: ', secs);
            if(secs > 0){
                listener(secs);
            }
            else{
                listener(END);
                clearInterval(iv);
                console.log('countdown terminated');
            }
        }, 1000);

        return () => {
            clearInterval(iv);
            console.log('countdown cancelled');
        }
    });
};

export function* incrementAsync({value}){
    const chan = yield call(countdown, value);
    try{
        while(true){
            let seconds = yield take(chan);
            yield put({
                type: INCREMENT_ASYNC,
                value: seconds
            });
        }
    }
    finally{
        if(!(yield cancelled())){
            console.log('Nong no: ');
            yield put(action(INCREMENT));
            yield put(action(COUNTDOWN_TERMINATED));
        }
        console.log('chan: ');
        chan.close();
    }
}

export function* watchIncrementAsync(){
    try{
        while(true){
            const action = yield take(INCREMENT_ASYNC);
            yield race([call(incrementAsync, action), take(CANCEL_INCREMENT_ASYNC)]);
        }
    }
    catch(err){
        console.log('catch: ', err);
    }
    finally{
        console.log('watchIncrementAsync terminated');
    }
}

export default function* rootSaga() {
    yield fork(watchIncrementAsync);
}