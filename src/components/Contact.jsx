import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Contact{" "}
          <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
            Us
          </span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Fill out the form below
          and let’s build something amazing together!
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-pink-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sky-400"
          ></textarea>
        </div>

        <button
          type="button"
          className="w-full py-3 bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
        >
          Send Message
        </button>
      </div>

      
    </section>
  );
};

export default Contact;
