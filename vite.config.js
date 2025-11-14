import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", 

  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    chunkSizeWarningLimit: 800, // avoid warnings

    rollupOptions: {
      output: {
        manualChunks(id) {

          // Split node_modules into a separate vendor chunk
          if (id.includes("node_modules")) {
            return "vendor";
          }

          // Split your components separately
          if (id.includes("src/components")) {
            return "components";
          }
        },
      },
    },
  },
});
