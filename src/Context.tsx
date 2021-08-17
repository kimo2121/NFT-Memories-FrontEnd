import React, { createContext, useState } from "react";

interface ITypes {
  statusButtonsFilter: string[];
  setStatusButtonsFilter: any;
  filteredCards: any;
  clearAllFilters: any;
  removeSpecificItem: any;
}

const contextDefaultValues: ITypes = {
  statusButtonsFilter: [],
  setStatusButtonsFilter: () => {},
  filteredCards: () => {},
  clearAllFilters: () => {},
  removeSpecificItem: () => {},
};

export const FilterContext = createContext<ITypes>(contextDefaultValues);

const DropDownStateProvider: React.FC = ({ children }) => {
  const [statusButtonsFilter, setStatusButtonsFilter] = useState<string[]>([]);

  const filteredCards = (e: any): void => {
    !statusButtonsFilter.includes(e.target.value) &&
      setStatusButtonsFilter([...statusButtonsFilter, e.target.value]);
  };

  const clearAllFilters = (): void => {
    setStatusButtonsFilter([]);
  };

  const removeSpecificItem = (indx: any): void => {
    setStatusButtonsFilter(
      statusButtonsFilter.filter((_, index) => index !== indx)
    );
  };

  return (
    <FilterContext.Provider
      value={{
        setStatusButtonsFilter,
        statusButtonsFilter,
        filteredCards,
        clearAllFilters,
        removeSpecificItem,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default DropDownStateProvider;
