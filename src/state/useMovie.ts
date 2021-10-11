import { useContext } from "react";
import { MovieContext } from "./context";

export const useMobileMenu = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useContext must be used within Provider");
  }
  return context;
};
