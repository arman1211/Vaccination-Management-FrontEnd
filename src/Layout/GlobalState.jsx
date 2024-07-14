import { createContext, useContext, useState, useEffect } from "react";

export const GlobalStateContext = createContext();
export const GlobalStateUpdateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext);

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("globalState");
    return savedState
      ? JSON.parse(savedState)
      : {
          isPatient: false,
          isDoctor: false,
          isAuthenticated: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("globalState", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalStateUpdateContext.Provider value={setState}>
        {children}
      </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
};
