import React, { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filtrado, setFiltrado] = useState("");

  return (
    <FilterContext.Provider value={{ filtrado, setFiltrado }}>
      {children}
    </FilterContext.Provider>
  );
};