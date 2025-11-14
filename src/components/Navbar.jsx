import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md h-16 z-[9999]">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-full">

        {/* Logo */}
        <div
          onClick={() => handleNav("home")}
          className="text-xl font-semibold flex items-center gap-2 cursor-pointer"
        >
          <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full" />
          Coders-Wings
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <button onClick={() => handleNav("home")} className="hover:text-blue-600">Home</button>
          <button onClick={() => handleNav("about")} className="hover:text-blue-600">About</button>
          <button onClick={() => handleNav("projects")} className="hover:text-blue-600">Projects</button>
          <button onClick={() => handleNav("contact")} className="hover:text-blue-600">Contact</button>

          <button
            onClick={() => handleNav("contact")}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded shadow hover:opacity-90"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border rounded text-gray-700"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white/95 transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="p-4 flex flex-col gap-3 text-gray-700 font-medium">

          <button onClick={() => handleNav("home")}>Home</button>
          <button onClick={() => handleNav("about")}>About</button>
          <button onClick={() => handleNav("projects")}>Projects</button>
          <button onClick={() => handleNav("contact")}>Contact</button>

          <button
            onClick={() => handleNav("contact")}
            className="mt-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded shadow text-center"
          >
            Hire Me
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
