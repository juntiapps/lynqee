import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RoutesConfig from "./routes";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <RoutesConfig /> {/* Memanggil konfigurasi routing */}
      </AuthProvider>
    </Router>
  );
};

export default App;
