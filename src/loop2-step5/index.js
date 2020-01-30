import React from "react";

import "./style.css";

class Loop2Step5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorMenuVisible: false
    };
  }
  componentDidMount() {
    window.addEventListener("keydown", event => {
      const keycodes = {
        tab: 9,
        shift: 16
      };

      const isShiftTab = event.which === keycodes.tab && event.shiftKey;

      if (isShiftTab) {
        event.preventDefault();

        this.setState({
          isColorMenuVisible: !this.state.isColorMenuVisible
        });
      }
    });

    window.addEventListener("keyup", event => {
      event.preventDefault();
    });
  }

  render() {
    return (
      <div className="container">
        <ShowColowMessage />
        <div
          className={`color-menu ${
            this.state.isColorMenuVisible
              ? "color-menu--visible"
              : "color-menu--hidden"
          }`}
        >
          <div
            className="color blue"
            tabIndex="0"
            id="first-menu-option"
            onFocus={() => {
              document.body.classList.value = "blue";
            }}
          ></div>
          <div
            className="color green"
            tabIndex="0"
            onFocus={() => {
              document.body.classList.value = "green";
            }}
          ></div>
          <div
            className="color yellow"
            tabIndex="0"
            onFocus={() => {
              document.body.classList.value = "yellow";
            }}
          ></div>
          <div
            className="color red"
            tabIndex="0"
            onFocus={() => {
              document.body.classList.value = "red";
            }}
          ></div>
          <div
            className="color purple"
            tabIndex="0"
            onFocus={() => {
              document.body.classList.value = "purple";
            }}
            onKeyDown={e => {
              e.preventDefault();
              if (e.keyCode === 9) {
                document.getElementById("first-menu-option").focus();
              }
            }}
          ></div>
        </div>
      </div>
    );
  }
}

const ShowColowMessage = () => (
  <span className="message"> Press Shift + Tab to choose color.</span>
);

export { Loop2Step5 };
