import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ΑΛΛΑΞΑΜΕ ΑΥΤΗ ΤΗ ΓΡΑΜΜΗ
import path from "path";

export default defineConfig({
  base: "/vip-barber-athens/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});