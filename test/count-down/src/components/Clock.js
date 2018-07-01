import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clock extends Component {
    formatTime(timeInSeconds) {
        var seconds = timeInSeconds % 60;
        var minutes = Math.floor(timeInSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }

    render() {
        var { timeInSeconds } = this.props;
        return (
            <div className="clock">
                <span className="clock-text">{this.formatTime(timeInSeconds)}</span>
            </div>
        );
    }
}

Clock.propTypes = {
    timeInSeconds: PropTypes.number
};

Clock.defaultProps = {
    timeInSeconds: 0
};

export default Clock;
