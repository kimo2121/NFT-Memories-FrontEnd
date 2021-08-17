import React, { useContext } from "react";
import "./StatusFilterResults.css";
import { IoClose } from "react-icons/io5";
import { FilterContext } from "../../Context";

const StatusFilterResults: React.FC = ({}) => {
  const { clearAllFilters, removeSpecificItem, statusButtonsFilter } =
    useContext(FilterContext);

  return (
    <div className="trading-filter">
      <span style={{ marginRight: "10px" }}>47,310 results</span>
      {statusButtonsFilter.map((item: string, indx: number) => (
        <div className="each-filtered-item" key={indx}>
          <span>{item}</span>{" "}
          <IoClose onClick={() => removeSpecificItem(indx)} />
        </div>
      ))}
      {statusButtonsFilter.length !== 0 && (
        <span className="clear-all-filters" onClick={clearAllFilters}>
          Clear All
        </span>
      )}
    </div>
  );
};

export default StatusFilterResults;
