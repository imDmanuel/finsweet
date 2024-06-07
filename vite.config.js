// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        "index.html",
        "blog.html",
        "about.html",
        "blog-article.html",
        "contact.html",
        "services.html",
        "service-detail.html",
      ],
    },
  },
});
