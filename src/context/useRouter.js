import { useContext } from "react";
import { RouterContext } from "../context/RouterContext"; 

export const useRouter = () => {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error("useRouter debe usarse dentro de un RouterProvider");
  }

  return context;
};