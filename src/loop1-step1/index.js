import React, { useState } from "react";

import "./style.css";

const Loop1Step1 = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const handleSelection = btn => setSelectedButton(btn);

  return (
    <div className="container">
      <div className="button-group">
        <button
          type="button"
          className={`button ${
            selectedButton === "price-btn" ? "button-select" : ""
          }`}
          onClick={() => handleSelection("price-btn")}
        >
          Sort by price
        </button>
        <button
          type="button"
          className={`button ${selectedButton === "name-btn" &&
            "button-select"}`}
          onClick={() => handleSelection("name-btn")}
        >
          Sort by name
        </button>
        <button
          type="button"
          className={`button ${selectedButton === "relevance-btn" &&
            "button-select"}`}
          onClick={() => handleSelection("relevance-btn")}
        >
          Sort by relevance
        </button>
      </div>
      <select className="selection-group">
        <option value="1">Sort by price</option>
        <option value="2">Sort by name</option>
        <option value="3">Sort by relevance</option>
      </select>
    </div>
  );
};

export { Loop1Step1 };
