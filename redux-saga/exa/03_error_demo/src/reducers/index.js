import * as nameAct from '../consts';

export default (state = 0, action) => {
    switch(action.type){
        case nameAct.ACTION_ERROR_IN_PUT:
            console.log('ACTION_ERROR_IN_PUT');
            // throw new Error('ACTION_ERROR_IN_PUT');
            break;
        case nameAct.ACTION_ERROR_IN_SELECT:
            console.log('ACTION_ERROR_IN_SELECT');
            break;
        case nameAct.ACTION_INLINE_SAGA_ERROR:
            console.log('ACTION_INLINE_SAGA_ERROR');
            break;
        case nameAct.ACTION_ERROR_IN_RACE:
            console.log('ACTION_ERROR_IN_RACE');
            break;
        case nameAct.ACTION_ERROR_IN_SPAWN:
            console.log('ACTION_ERROR_IN_SPAWN');
            break;
        default:
            return state;
    }
}

export const errorGeneratorSelector = () => {
    // undefinedIsNotAFunction();
}