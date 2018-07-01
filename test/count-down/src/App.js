import React, { Component } from 'react';
import './styles/app.css';

import Countdown from './components/Countdown';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Countdown Timer</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        <Countdown />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
