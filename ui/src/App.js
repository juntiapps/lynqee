import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RoutesConfig from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { baselightTheme } from "./theme/DefaultColors";

const App = () => {
  const theme = baselightTheme;
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <RoutesConfig /> {/* Memanggil konfigurasi routing */}
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
