import React, { useState } from "react";

import "./style.css";

const Loop1Step2 = () => {
  const [value, setValue] = useState("");
  const [selectedTab, setSelectedTab] = useState("1");

  const selectTab = id => setSelectedTab(id);

  return (
    <div className="container">
      <div className="enterTabIndexWrapper">
        <input
          className="inputNumber"
          type="number"
          placeholder="Enter tab index"
          min="1"
          max="100"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
          className="button"
          type="button"
          onClick={() => selectTab(value)}
        >
          Change tab
        </button>
      </div>

      <div className="tab">
        <button
          className={`tablinks ${
            selectedTab === "1" ? "tablinks--selected" : ""
          }`}
          onClick={() => selectTab("1")}
        >
          Positive
        </button>
        <button
          className={`tablinks ${
            selectedTab === "2" ? "tablinks--selected" : ""
          }`}
          onClick={() => selectTab("2")}
        >
          Negative
        </button>
        <button
          className={`tablinks ${
            selectedTab === "3" ? "tablinks--selected" : ""
          }`}
          onClick={() => selectTab("3")}
        >
          Neutral
        </button>
      </div>
      <div className={`tabcontent ${selectedTab !== "1" ? "hidden" : ""}`}>
        <p>Positive content</p>
      </div>
      <div className={`tabcontent ${selectedTab !== "2" ? "hidden" : ""}`}>
        <p>Negative content</p>
      </div>
      <div className={`tabcontent ${selectedTab !== "3" ? "hidden" : ""}`}>
        <p>Neutral content</p>
      </div>
    </div>
  );
};

export { Loop1Step2 };
