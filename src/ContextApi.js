"use client";
import { createContext, useContext } from "react";

const ContextApi = createContext();

export function useMyContext() {
  return useContext(ContextApi);
}

export default ContextApi;
