import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-gray-900">
      <Router>
        <NavBar />
        <main className="container mx-auto min-h-screen flex-grow">
          <AppRoutes />
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
