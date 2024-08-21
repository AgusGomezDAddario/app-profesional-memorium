import React, { createContext, useState, useRef } from "react";

const AnotacionContext = createContext();

const AnotacionProvider = ({ children }) => {
  const [anotacionFinal, setAnotacionFinal] = useState("");
  const anotacionRef = useRef("");

  const clearAnotacion = () => {
    anotacionRef.current.value = "";
  };

  const obtenerAnotacion = () => {
    setAnotacionFinal(anotacionRef.current.value);
  };

  return (
    <AnotacionContext.Provider
      value={{
        anotacionFinal,
        anotacionRef,
        obtenerAnotacion,
        clearAnotacion,
      }}
    >
      {children}
    </AnotacionContext.Provider>
  );
};

export { AnotacionContext, AnotacionProvider };
