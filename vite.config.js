console.log("Loading vite.config.js");
import { defineConfig } from "vite";
import { react } from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      treeshake: false, 
    },
  },
});
