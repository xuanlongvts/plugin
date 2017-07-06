import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import api from '../middlewares/api';
import DevTools from '../components/DevTools/index';

const middlewareArr = [];
middlewareArr.push(thunk);
middlewareArr.push(api);

const configureStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middlewareArr),
        DevTools.instrument(),
    )
)

// const configureStore = (initialState = {}) => {
//     const store = createStore(
//         rootReducer,
//         initialState,
//         compose(
//             applyMiddleware(...middlewareArr),
//             DevTools.instrument(),
//         )
//     )
//     if (module.hot) {
//         module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default)); // eslint-disable-line global-require, max-len
//     }

//     return store;
// };

export default configureStore;