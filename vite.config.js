// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      //   input: {
      //     index: resolve(__dirname, "index.html"),
      //     "blog-article": resolve(__dirname, "blog-article.html"),
      //     blog: resolve(__dirname, "blog.html"),
      //     about: resolve(__dirname, "about.html"),
      //     contact: resolve(__dirname, "contact.html"),
      //   },
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
