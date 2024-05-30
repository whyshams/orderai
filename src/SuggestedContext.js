"use client";

import React, { useState, useEffect } from "react";
import ContextApi from "./ContextApi";

const ContextProvider = ({ children }) => {
  const [suggested, setSuggested] = useState([]);
  const [generation, setGeneration] = useState("");
  const [prompt, setPrompt] = useState();
const [loading,setLoading] = useState(false)
  return (
    <ContextApi.Provider
      value={{
        suggested,
        setSuggested,
        generation,
        setGeneration,
        prompt,
        setPrompt,
        loading,setLoading
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
