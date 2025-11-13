import React from "react";

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            About{" "}
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
              Coders-Wings
            </span>
          </h2>
          <div className="w-80 h-1 bg-gradient-to-r from-sky-400 to-pink-500 mb-8 rounded-full"></div>

          <p className="text-white/90 text-lg leading-relaxed mb-6">
            At <strong>Coders-Wings</strong>, we believe in transforming ideas into powerful
            digital experiences. Our team of skilled developers and designers specializes in
            <span className="text-sky-400"> Shopify</span>, <span className="text-pink-400">Wix</span>,
            and the <span className="text-emerald-400">MERN Stack</span>, building scalable,
            lightning-fast, and visually stunning websites.
          </p>

          <p className="text-white/80 leading-relaxed mb-8">
            We’re passionate about helping businesses soar higher with clean design,
            optimized performance, and seamless user experiences. Every line of code we write
            is driven by precision, creativity, and innovation.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Let’s Work Together
          </a>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Team working together"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-pink-500/20 rounded-2xl blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
