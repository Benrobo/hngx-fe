import { createContext, useState } from "react";

const DataContext = createContext();

export default DataContext;

export function DataContextProvider({ children }) {
  const contextStateValues = {};

  return (
    <DataContext.Provider value={contextStateValues}>
      {children}
    </DataContext.Provider>
  );
}
