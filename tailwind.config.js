import { defineConfig } from "tailwindcss";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        clr1: "#1b75bc", // Blue
        clr2: "#8cc63f", // Green
        clr3: "#6d6f71", // Grey
      },
      fontFamily: {
        primary: ["Playfair Display", "sans-serif"],
      },
    },
  },
});
