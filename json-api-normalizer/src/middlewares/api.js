import normalize from 'json-api-normalizer';

export const API_DATA_REQUEST = 'API_DATA_REQUEST';
export const API_DATA_SUCCESS = 'API_DATA_SUCCESS';
export const API_DATA_FAILURE = 'API_DATA_FAILURE';

const API_ROOT = 'https://phoenix-json-api-example.herokuapp.com/api';
const callApi = (endpoint) => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl)
        .then(
            response => response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }

                let data = normalize(json, { endpoint });

                return Promise.resolve(data);
            })
        )
        .catch(err => console.log('err: ', err));
        
}

export const CALL_API = 'Call API';
const api = store => {
    return function (next) {
        return function (action) {
            const callAPI = action[CALL_API];

            if (typeof callAPI === 'undefined') {
                return next(action);
            }

            let { endpoint } = callAPI;
            if (typeof endpoint === 'function') {
                endpoint = endpoint(store.getState());
            }

            if (typeof endpoint !== 'string') {
                throw new Error('Specify a string endpoint URL.');
            }

            const actionWith = data => {
                const finalAction = { ...action, ...data };
                //const finalAction = Object.assign({}, action, data);
                //console.log('finalAction: ', finalAction);
                delete finalAction[CALL_API];
                return finalAction;
            }
            next(actionWith({
                type: API_DATA_REQUEST,
                endpoint
            }));

            return callApi(endpoint)
                .then(
                    res => next(actionWith({
                        res,
                        type: API_DATA_SUCCESS,
                        endpoint
                    })),
                    err => next(actionWith({
                        type: API_DATA_FAILURE,
                        error: err.message || 'Something bad happended'
                    }))
                )
        }
    }
}

export default api;