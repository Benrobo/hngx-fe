import { createContext, useState } from "react";

const DataContext = createContext();

export default DataContext;

export function DataContextProvider({ children }) {
  const [uploadModal, setUploadModal] = useState(false);

  const toggleUploadModal = () => setUploadModal(!uploadModal);

  const contextStateValues = {
    toggleUploadModal,
  };

  return (
    <DataContext.Provider value={contextStateValues}>
      {children}
    </DataContext.Provider>
  );
}
