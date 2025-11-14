import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) {
          const offset = target.offsetTop - 70; // navbar height fix
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 500);

      return;
    }

    const target = document.getElementById(id);
    if (target) {
      const offset = target.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md h-16 z-[9999]">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">

        {/* Logo */}
        <div
          onClick={() => goToSection("home")}
          className="cursor-pointer text-xl font-semibold flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full" />
          Coders-Wings
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <button onClick={() => goToSection("home")} className="hover:text-blue-600">Home</button>
          <button onClick={() => goToSection("about")} className="hover:text-blue-600">About</button>
          <button onClick={() => goToSection("projects")} className="hover:text-blue-600">Projects</button>
         

          <button
            onClick={() => goToSection("contact")}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded shadow"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border rounded"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden bg-white transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="p-4 flex flex-col gap-3 text-gray-700 font-medium">
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("about")}>About</button>
          <button onClick={() => goToSection("projects")}>Projects</button>

          <button
            onClick={() => goToSection("contact")}
            className="px-4 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded mt-2"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
