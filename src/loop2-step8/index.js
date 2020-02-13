import React from "react";

import "./style.css";

class Loop2Step8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoRef: React.createRef(),
      progressPeercentage: 0.0,
      playing: false
    };
  }
  render() {
    return (
      <div className="container">
        <video
          src="https://frontloops.io/video/peru.mp4"
          className="video-player"
          ref={this.state.videoRef}
          onTimeUpdate={e => {
            const video = e.target;

            this.setState({
              ...this.state,
              progressPeercentage: Math.round(
                (video.currentTime * 100) / video.duration
              )
            });
          }}
          onClick={e => {
            if (this.state.playing) {
              e.target.pause();
            } else {
              e.target.play();
            }

            this.setState({ ...this.state, playing: !this.state.playing });
          }}
        >
          <div className="video-overlay"> </div>
        </video>
        <div className="controls">
          <button
            className="button"
            onClick={() => {
              const video = this.state.videoRef.current;

              video.currentTime = video.currentTime - 10.0;
            }}
          >
            Back 10s
          </button>
          <button
            className="button"
            onClick={() => {
              const video = this.state.videoRef.current;

              video.currentTime = video.currentTime + 10.0;
            }}
          >
            Skip 10s
          </button>
          <button
            className="button"
            onClick={() => {
              const video = this.state.videoRef.current;

              video.currentTime = 0;
            }}
          >
            Reset
          </button>
          <div className="progress-bar">
            <div
              className="progress-bar--completed"
              style={{ width: `${this.state.progressPeercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export { Loop2Step8 };
