import React from 'react'; 

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Homepage from "./pages/home/Homepage";
import { useRoutes } from "react-router";
import AuthPage from "./pages/auth/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];

function App() {
  const element = useRoutes(routes);
  return (
    <MantineProvider>
      {element}
    </MantineProvider>
  );
}

export default App; 
