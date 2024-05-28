"use client";

import React, { useState, useEffect } from "react";
import ContextApi from "./ContextApi";

const ContextProvider = ({ children }) => {
  const [suggested, setSuggested] = useState([]);
  const [generation, setGeneration] = useState("");
  const [prompt, setPrompt] = useState();

  return (
    <ContextApi.Provider
      value={{
        suggested,
        setSuggested,
        generation,
        setGeneration,
        prompt,
        setPrompt,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
