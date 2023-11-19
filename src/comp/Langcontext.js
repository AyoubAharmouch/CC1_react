// Langcontext.js
import React, { createContext, useContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('de'); // Default language is English

  const switchLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
