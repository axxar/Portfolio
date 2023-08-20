import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./Routes";

function App() {
  
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-800">
      <Router>
        <NavBar />
        <main className="container mx-auto min-h-screen flex-grow">
          <AppRoutes />
        </main>
      </Router>
    </div>
  );
}

export default App;
