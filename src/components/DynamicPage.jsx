import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectsData = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  description:
    "A professional web project built using modern frameworks and clean UI.",
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
}));

const DynamicPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) return <h1 className="text-white text-center mt-20">Project Not Found</h1>;

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6">
      
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
        
        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg mb-8">{project.description}</p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition"
          >
            ← Back
          </button>

          <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-pink-500 rounded-lg shadow hover:scale-105 transition">
            Visit Live Project
          </button>
        </div>
      </div>

    </div>
  );
};

export default DynamicPage;
