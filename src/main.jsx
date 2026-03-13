import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { RouterProvider } from "./context/RouterContext.jsx"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider> 
        <App />
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>
);