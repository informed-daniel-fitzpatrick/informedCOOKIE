import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "node_modules/govuk-frontend/dist/govuk",
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
});
