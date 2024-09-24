"use client";
import { useState, createContext } from "react";

// TODO: Use files in this directory to manage react contexts
export const SwitchContext = createContext<{
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  checked: false,
  setChecked: () => {},
});

export function SwitchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checked, setChecked] = useState(false);
  return (
    <SwitchContext.Provider value={{ checked, setChecked }}>
      {children}
    </SwitchContext.Provider>
  );
}
