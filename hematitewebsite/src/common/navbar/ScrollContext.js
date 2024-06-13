
import React, { createContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [targetSection, setTargetSection] = useState(null);

  return (
    <ScrollContext.Provider value={{ targetSection, setTargetSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
