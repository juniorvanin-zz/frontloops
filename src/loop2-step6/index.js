import React, { useState, useEffect } from "react";

import "./style.css";

class Loop2Step6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdowns: [],
      inputValue: ""
    };
  }

  render() {
    return (
      <div className="container">
        <div className="enterBoilerTimerWrapper">
          <input
            className="inputNumber"
            type="number"
            placeholder="Enter boilder timer"
            min="1"
            max="100"
            value={this.state.inputValue}
            onChange={e =>
              this.setState({ ...this.state, inputValue: e.target.value })
            }
          />
          <button
            className="button"
            type="button"
            onClick={() => {
              const countdowns = this.state.countdowns;
              countdowns.push({ initialValue: this.state.inputValue });

              this.setState({ ...this.state, countdowns, inputValue: "" });
            }}
          >
            Start boiling
          </button>
        </div>
        <div className="timers">
          {this.state.countdowns.map((countdown, index) => (
            <Countdown key={index} initialValue={countdown.initialValue} />
          ))}
        </div>
      </div>
    );
  }
}

const Countdown = ({ initialValue }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    const intervalID = setTimeout(
      () => setCurrentValue(currentValue - 1),
      1000
    );

    return () => {
      clearTimeout(intervalID);
    };
  });

  return (
    currentValue >= 0 && (
      <div className="timer">
        <span>{currentValue}</span>
      </div>
    )
  );
};

export { Loop2Step6 };
