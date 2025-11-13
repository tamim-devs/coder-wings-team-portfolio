import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const linkRefs = useRef([])

  useEffect(() => {
    // Navbar small fade animation
    gsap.from(navRef.current, { y: -20, opacity: 0, duration: 0.6, ease: 'power3.out' })

    // Enable smooth scroll globally
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const toggle = () => setOpen((v) => !v)

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" // ✅ z-50 added (perfect balance)
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-xl font-semibold">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full inline-block" />
            Coders-Wings
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Contact me
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed top-16 right-0 w-64 max-w-full h-[calc(100vh-4rem)] bg-white shadow-lg transform ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } transition-all duration-300 ease-in-out z-40`} // ✅ kept under navbar but above page
      >
        <div className="p-6 flex flex-col gap-4">
          {links.map((l, i) => (
            <a
              key={l.name}
              href={l.href}
              ref={(el) => (linkRefs.current[i] = el)}
              onClick={() => setOpen(false)}
              className="text-gray-800 py-2 rounded hover:bg-gray-100 transition"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition inline-block text-center"
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
