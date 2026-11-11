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
        primary: "#0D4F4A", // Deep teal / dark green (Req 6.1)
        secondary: "#B8E6E0", // Soft mint / light aqua (Req 6.1)
        accent: "#F5C842", // Warm yellow (Req 6.2)
        background: "#FAFAFA", // White / very light neutral (Req 6.1)
        "background-white": "#FFFFFF",
        text: "#2A2A2A", // Dark charcoal (Req 6.1)
        footer: "#0A2E2C", // Deep navy / dark teal (Req 6.1)
      },
      fontFamily: {
        sans: ["Inter", "DM Sans", "system-ui", "sans-serif"], // Req 6.3
      },
      screens: {
        mobile: { max: "639px" }, // < 640px (Req 5.3)
        tablet: "640px", // 640px - 1023px (Req 5.2)
        desktop: "1024px", // >= 1024px (Req 5.1)
      },
    },
  },
  plugins: [],
};

export default config;
