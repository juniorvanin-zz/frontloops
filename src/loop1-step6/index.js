import React from "react";

import "./style.css";

class Loop1Step6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      items: [4, 5, 6, 7],
      renderedItems: [1, 2, 3]
    };
  }
  componentDidMount() {
    const setVisibleEvent = e => {
      if (e.pageY <= 0) {
        this.setState({
          ...this.state,
          isVisible: true
        });
        document.removeEventListener("mouseleave", setVisibleEvent);
      }
    };

    document.addEventListener("mouseleave", setVisibleEvent);

    function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
      return isVisible;
    }

    const scrollEvent = () => {
      const lastRectangle = document.querySelectorAll(".rectangle:last-child");

      if (isScrolledIntoView(lastRectangle[0])) {
        const newItemId = this.state.items.shift();
        this.state.renderedItems.push(newItemId);

        this.setState({
          ...this.state
        });

        if (this.state.items.length === 0) {
          window.removeEventListener("scroll", scrollEvent);
        }
      }
    };

    window.addEventListener("scroll", scrollEvent);
  }

  render() {
    return (
      this.state.isVisible && (
        <div className="container">
          {this.state.renderedItems.map(id => (
            <Rectangle key={id} />
          ))}
        </div>
      )
    );
  }
}

const Rectangle = () => <div className="rectangle"></div>;

export { Loop1Step6 };
