import React, { createContext, useState } from "react";

const VolumeContext = createContext();

const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(1); // valor 1 é o volume padrão

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

export { VolumeContext, VolumeProvider };
