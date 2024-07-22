/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Karla Variable", "sans-serif"],
      body: ["Inconsolata Variable", "monospace"],
    },
    extend: {
      keyframes: {
        land: {
          "0%": { transform: "translateY(-3%)", opacity: 0, rotate: "-0.5deg" },
          "100%": { transform: "translateY(0%)", opacity: 1, rotate: "0deg" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        land: "land 0.5s ease-in",
        fadein: "fadein 1.5s ease-in",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-bg-patterns"),
    require("@tailwindcss/typography"),
  ],
}
