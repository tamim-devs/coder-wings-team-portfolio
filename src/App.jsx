import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ViewAllProjects from "./components/ViewAllProjects";
import DynamicPage from "./components/DynamicPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <Router>
      {/* Navbar Always Visible */}
      <Navbar />

      {/* All Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Faq />
              <Contact />
            </>
          }
        />

        <Route path="/projects" element={<ViewAllProjects />} />
        <Route path="/project/:id" element={<DynamicPage />} />
      </Routes>

      {/* Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Footer Always Visible */}
      <Footer />
    </Router>
  );
};

export default App;
