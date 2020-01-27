import React from "react";

import "./style.css";

class Loop2Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      items: [
        {
          selected: false,
          value: "Ice-cream"
        },
        {
          selected: false,
          value: "Hot-dog"
        },
        {
          selected: false,
          value: "Popcorn"
        },
        {
          selected: false,
          value: "Cookie"
        }
      ]
    };
  }
  componentDidMount() {}

  render() {
    const buildSelectedMessage = () => {
      const selected = this.state.items.filter(i => i.selected);

      if (selected.length === 0) {
        return "Please, select your food";
      } else if (selected.length <= 2) {
        return selected.map(s => s.value).join(", ");
      } else {
        const displayableItems = selected.map(s => s.value).slice(0, 2);
        const otherCount = selected.length - displayableItems.length;

        return displayableItems.join(", ").concat(" and ", otherCount, " more");
      }
    };
    return (
      <div className="container">
        <span> {buildSelectedMessage()}</span>
        <hr />
        <ul className="items">
          <li>
            <button
              className={`button button--bold ${
                this.state.selectAll ? "button--selected" : ""
              }`}
              onClick={() => {
                this.setState({
                  selectAll: !this.state.selectAll,
                  items: this.state.items.map(i => ({
                    ...i,
                    selected: !this.state.selectAll
                  }))
                });
              }}
            >
              CheckAll
            </button>
          </li>
          {this.state.items.map(item => {
            return (
              <li key={item.value}>
                <button
                  className={`button ${
                    item.selected ? "button--selected" : ""
                  }`}
                  type="button"
                  onClick={() => {
                    const items = this.state.items;

                    for (let i = 0; i < items.length; i++) {
                      if (items[i].value === item.value) {
                        items[i] = {
                          value: item.value,
                          selected: !item.selected
                        };
                      }
                    }

                    this.setState({
                      ...this.state,
                      items
                    });
                  }}
                >
                  {item.value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export { Loop2Step2 };
