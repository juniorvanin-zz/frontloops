import React from "react";

import "./style.css";

class Loop1Step9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixMenu: false
    };
  }
  componentDidMount() {
    const scrollEvent = e => {
      if (window.pageYOffset > 100) {
        this.setState({ fixMenu: true });
      } else {
        this.setState({ fixMenu: false });
      }
    };
    window.addEventListener("scroll", scrollEvent);
  }
  render() {
    return (
      <div className="container">
        <aside>
          <Menu
            customStyle={
              this.state.fixMenu ? { position: "fixed", top: "0" } : {}
            }
          />
        </aside>
        <main className="main-content"> </main>
      </div>
    );
  }
}

const Menu = ({ customStyle }) => (
  <div className="side-menu" style={customStyle}></div>
);
export { Loop1Step9 };
