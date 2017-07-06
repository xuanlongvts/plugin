import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Root from './components/root';
import store from './store/index';

import './App.css';

//const store = configureStore();

class App extends Component{

    render() {
        return (
            <Provider store={store}>
                <Root />  
            </Provider>
        )
    }
}

export default App;