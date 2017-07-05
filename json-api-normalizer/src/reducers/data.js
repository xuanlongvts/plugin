
import merge from 'lodash/merge';
import {
    API_DATA_REQUEST,
    API_DATA_SUCCESS
} from '../middlewares/api';

const initalState = {
    meta: {}
}

export default (state = initalState, action) => {
    switch (action.type) {
        case API_DATA_REQUEST:
            return merge({}, state, {
                meta: {
                    [action.endpoint]: {
                        loading: true
                    }
                }
            });
        case API_DATA_SUCCESS:
            return merge({}, state,
                merge({}, action.res, {
                    meta: {
                        [action.endpoint]: {
                            loading: false
                        }
                    }
                })
            );
        default:
            return state;    
    }
}