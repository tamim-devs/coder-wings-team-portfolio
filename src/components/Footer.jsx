import React from "react";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Coders-Wings
            </span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            We build high-performance, scalable, and visually stunning web
            solutions using Shopify, Wix, and the MERN stack.
          </p>
        </div>

        {/* Quick Links */}
       <div className="text-sm">
  <h3 className="text-lg font-semibold mb-4 text-white/90">Quick Links</h3>
  <ul className="grid grid-cols-2 gap-y-2">
    {["Home", "About", "Projects", "FAQ", "Contact"].map((link) => (
      <li key={link}>
        <a
          href={`#${link.toLowerCase()}`}
          className="text-white/70 hover:text-sky-400 transition-colors"
        >
          {link}
        </a>
      </li>
    ))}
  </ul>
</div>


        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white/90">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-sky-500/20 transition"
            >
              <Facebook size={20} />
            </a>
           
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-sky-500/20 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:info@coderswings.com"
              className="p-2 rounded-full bg-white/10 hover:bg-sky-500/20 transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-white/60 text-sm border-t border-white/10 pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Coders-Wings</span>. All
          rights reserved.
        </p>
        <p className="mt-2">
          Designed & Developed with ❤️ by{" "}
          <span className="text-sky-400">Coders-Wings Team</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
