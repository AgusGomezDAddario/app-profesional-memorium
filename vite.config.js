console.log("Loading vite.config.js");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "./env.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  build: {
    outDir: 'dist',
  },
});
