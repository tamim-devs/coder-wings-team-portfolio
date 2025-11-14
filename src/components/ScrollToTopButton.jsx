import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Show button only when scroll is below the hero/home section
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white p-6 rounded-md shadow-xl text-2xl transition-all duration-300 z-[9999]
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
