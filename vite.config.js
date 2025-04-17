import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import ThemeConfig from "tailwindcss/plugin";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ThemeConfig()],
});
