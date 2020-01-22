import React from "react";

import "./style.css";

class Loop1Step5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["design", "backend", "frontend", "testing"],
      actualWorld: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      console.log(this.state.actualWorld);
      if (this.state.words.length - 1 < this.state.actualWorld + 1) {
        this.setState({
          ...this.state,
          actualWorld: 0
        });
      } else {
        this.setState({
          ...this.state,
          actualWorld: this.state.actualWorld + 1
        });
      }
    }, 2000);
  }

  render() {
    return (
      <div className="container">
        <p>
          We can help you with{" "}
          <span className="typing-word">
            {this.state.words[this.state.actualWorld]}
          </span>
        </p>
      </div>
    );
  }
}

export { Loop1Step5 };
