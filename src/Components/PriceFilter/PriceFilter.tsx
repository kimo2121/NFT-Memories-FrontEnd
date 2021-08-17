import React, { useState } from "react";
import RangeSlider from "../SliderButton/Slider";

const PriceFilter: React.FC = () => {
  const [value, setValue] = React.useState<number[]>([2000, 3000]);

  return (
    <div className="hidden-status-menu price-menu">
      {/* <RangeSlider value={value} setValue={setValue} /> */}
      <div className="min-max-values">
        <div style={{ height: "71px" }}>
          <label htmlFor="">Min</label>
          <br />
          <input
            type="text"
            readOnly
            value={value[0]}
            style={{ fontSize: "1.4rem" }}
          />
        </div>
        <span></span>
        <div style={{ height: "71px" }}>
          <label htmlFor="">Max</label>
          <br />
          <input
            type="text"
            readOnly
            value={value[1]}
            style={{ fontSize: "1.4rem" }}
          />
        </div>
      </div>
      <button className="apply-btn">Apply</button>
    </div>
  );
};

export default PriceFilter;
