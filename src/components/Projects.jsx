import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Shopify Store Customization",
    description:
      "A fully customized Shopify store with advanced product filtering, smooth animations, and high-performance optimization.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80",
    link: "https://example.com/shopify",
  },
  {
    title: "Wix Business Portfolio",
    description:
      "A clean and modern portfolio website for a creative agency built with Wix, optimized for SEO and conversions.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    link: "https://example.com/wix",
  },
  {
    title: "MERN Stack Web App",
    description:
      "A full-stack web application with authentication, dynamic dashboard, and RESTful API built using the MERN stack.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    link: "https://example.com/mern",
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Explore our latest web creations — each crafted with precision,
          performance, and passion.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-pink-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Slider Section */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-6">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    View Site
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
