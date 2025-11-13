import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Home = () => {
  const overlayRef = useRef(null)

  useEffect(() => {
    // Animate gradient overlay endlessly
    gsap.to(overlayRef.current, {
      backgroundPosition: '200% center',
      duration: 4,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <section
    id="home"
      className="relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[80vh] py-16 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'linear-gradient(120deg, #0d0b07, #0d0b07, #0d0b07, #0d0b07)',
          backgroundSize: '400% 400%',
        }}
      ></div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative  max-w-3xl text-white">
        <h1 className="text-4xl mt-6 sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
            Coders-Wings
          </span>{' '}
          <br />
          Shopify & Wix Customization <br />
          <span className="text-white/90 text-4xl sm:text-5xl">+ MERN Stack Experts</span>
        </h1>

        <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
          We craft fast, scalable, and visually stunning websites using Shopify, Wix, and the
          powerful MERN stack. Our mission: helping brands grow through clean design, optimized
          performance, and seamless digital experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-sky-700 font-semibold rounded-lg shadow hover:shadow-md hover:-translate-y-0.5 transition"
          >
            Contact Us
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-white/90">
          <span className="font-medium mr-1">Tech:</span>
          {['Shopify', 'Wix', 'React', 'Node', 'Express', 'MongoDB', 'Tailwind'].map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-white/10 rounded-full border border-white/10 hover:bg-white/20 transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
