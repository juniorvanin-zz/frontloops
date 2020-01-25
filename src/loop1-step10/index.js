import React from "react";

import "./style.css";

class Loop1Step10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { position: { top: 25, left: 25 }, moving: false };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div
          style={this.state.position}
          className="card"
          onMouseDown={e => {
            this.setState({
              position: {
                top: e.clientY - 125,
                left: e.clientX - 125
              },
              moving: true
            });
          }}
          onMouseUp={e => {
            this.setState({
              position: {
                top: e.clientY - 125,
                left: e.clientX - 125
              },
              moving: false
            });
          }}
          onMouseMove={e => {
            if (this.state.moving) {
              this.setState({
                position: {
                  top: e.clientY - 125,
                  left: e.clientX - 125
                }
              });
            }
          }}
        ></div>
      </div>
    );
  }
}

export { Loop1Step10 };
