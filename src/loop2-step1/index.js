import React, { createRef, useState } from "react";

import "./style.css";

class Loop2Step1 extends React.Component {
  firstInput = createRef();
  secondInput = createRef();
  thirdInput = createRef();
  fourthInput = createRef();
  fifthInput = createRef();
  sixthInput = createRef();

  constructor(props) {
    super(props);
    this.state = {
      currentInput: this.firstInput
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <span className="inputGroup-title"> Enter code: </span>
        <div
          className="inputWrapper"
          onClick={() => {
            this.state.currentInput.current.focus();
          }}
        >
          <div className="inputGroup">
            <Input
              thisInputRef={this.firstInput}
              nextInputRef={this.secondInput}
              setCurrentInput={input => {
                this.setState({ ...this.state, currentInput: input });
              }}
            />
            <Input
              thisInputRef={this.secondInput}
              nextInputRef={this.thirdInput}
              previousInputRef={this.firstInput}
              setCurrentInput={input => {
                this.setState({ ...this.state, currentInput: input });
              }}
            />
            <Input
              thisInputRef={this.thirdInput}
              nextInputRef={this.fourthInput}
              previousInputRef={this.secondInput}
              setCurrentInput={input => {
                this.setState({ ...this.state, currentInput: input });
              }}
            />
          </div>
          <span className="sepatator">—</span>
          <div className="inputGroup">
            <Input
              thisInputRef={this.fourthInput}
              nextInputRef={this.fifthInput}
              previousInputRef={this.thirdInput}
              setCurrentInput={input => {
                this.setState({ ...this.state, currentInput: input });
              }}
            />
            <Input
              thisInputRef={this.fifthInput}
              nextInputRef={this.sixthInput}
              previousInputRef={this.fourthInput}
              setCurrentInput={input => {
                this.setState({ ...this.state, currentInput: input });
              }}
            />
            <Input
              thisInputRef={this.sixthInput}
              previousInputRef={this.fifthInput}
              setCurrentInput={input => {
                this.setState({ ...this.state, currentInput: input });
              }}
            />
          </div>
        </div>

        <label className="button-label">
          <button
            type="button"
            className="button"
            onClick={() => {
              alert("Value is 123456");
            }}
          >
            Submit
          </button>
        </label>
      </div>
    );
  }
}

const Input = ({
  thisInputRef,
  nextInputRef,
  previousInputRef,
  setCurrentInput
}) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      className="input"
      ref={thisInputRef}
      value={value}
      onFocus={e => {
        const currentValue = e.target.value;
        if (currentValue.length === 1) {
          setCurrentInput(nextInputRef);
          nextInputRef.current.focus();
        }
      }}
      onChange={e => {
        const currentValue = e.target.value;
        setCurrentInput(thisInputRef);
        setValue(currentValue);

        if (currentValue !== "" && nextInputRef !== undefined) {
          nextInputRef.current.focus();
        }
      }}
      onKeyDown={e => {
        if (e.key === "Backspace" && previousInputRef !== undefined) {
          setValue("");
          setCurrentInput(previousInputRef);

          previousInputRef.current.focus();
        }
      }}
    />
  );
};
export { Loop2Step1 };
