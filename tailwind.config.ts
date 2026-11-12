import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Updated to match OffLoad Laundry logo colors
        primary: "#002707", // Very dark green from logo
        "primary-light": "#134c46", // Lighter dark green for variations
        secondary: "#decfaa", // Cream/beige from logo
        "secondary-light": "#f3ebd2", // Lighter cream for accents
        accent: "#76805e", // Muted sage green from logo
        background: "#fafafa", // Off-white
        "background-white": "#ffffff",
        text: "#1a1a1a", // Very dark for better contrast
        "text-light": "#4a4a4a", // Medium dark for secondary text
        footer: "#002707", // Match primary for footer
      },
      fontFamily: {
        sans: ["Inter", "DM Sans", "system-ui", "sans-serif"],
      },
      screens: {
        mobile: { max: "639px" },
        tablet: "640px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};

export default config;
