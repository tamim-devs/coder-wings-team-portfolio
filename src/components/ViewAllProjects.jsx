import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projectsData = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description:
    "A professional web project built using modern frameworks and clean UI.",
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
}));

const ITEMS_PER_PAGE = 8;

const ViewAllProjects = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentProjects = projectsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      {/* TITLE */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          All{" "}
          <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-white/70 mt-4 max-w-xl mx-auto">
          Explore all of our professional works — optimized, clean, and fast.
        </p>
      </div>

      {/* 8 PROJECT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4">
                {project.description}
              </p>

              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="w-full py-2 bg-gradient-to-r from-sky-500 to-pink-500 rounded-md font-semibold hover:scale-105 transition"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition ${
            page === 1 ? "opacity-30 cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>

        <span className="text-white/80 font-semibold">
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition ${
            page === totalPages ? "opacity-30 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ViewAllProjects;
