import React, { Component } from 'react';

function stopWatch() {
    return <h1>this function does not works</h1>
}

class stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            microsecond: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
            weeks: 0

        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            var { microsecond, seconds, minutes, hours, days, weeks } = this.state;
            if (microsecond === 99) {
                microsecond = 0;
                seconds = seconds + 1
            }
            else
                microsecond = microsecond + 1
            if (seconds === 59) {
                seconds = 0;
                minutes = minutes + 1
            }
            if (minutes === 59) {
                minutes = 0;
                hours = hours + 1
            }
            if (hours === 23) {
                hours = 0;
                days = days + 1
            }
            if (days === 7) {
                days = 0;
                weeks = weeks + 1
            }
            this.setState({ microsecond, seconds, minutes, hours, days, weeks })
        }, 10)
    }

    render() {
        const { microsecond, seconds, minutes, hours, days, weeks } = this.state
        return (
            <div>
                <button onClick={() => this.setState(microsecond, seconds, minutes, hours, weeks, days)}>start</button>
                <button>Reset</button>
                <stopWatch>I am tired</stopWatch>

            </div>
        );
    }
}

export default stopwatch;