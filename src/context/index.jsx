// "use client";
// import { createContext, useState, useContext } from "react";

// const AppContext = createContext();

// export function AppWrapper({ children }) {
//   const [loaderToggel, setLoaderToggel] = useState(false);
//   const [loaderToggel2, setLoaderToggel2] = useState(true);

//   return (
//     <AppContext.Provider value={{ loaderToggel, setLoaderToggel, loaderToggel2, setLoaderToggel2 }}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }


// src/context/index.jsx
"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [loaderToggel, setLoaderToggel] = useState(false);
  const [loaderToggel2, setLoaderToggel2] = useState(true);

  return (
    <AppContext.Provider
      value={{
        loaderToggel,
        setLoaderToggel,
        loaderToggel2,
        setLoaderToggel2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
