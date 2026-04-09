import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4A3AFF",
          light: "#6B5EFF",
          dark: "#3229CC",
          subtle: "#EEEDFF",
        },
        whatsapp: "#25D366",
        neutral: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.06)",
        hover: "0 8px 24px rgba(74,58,255,0.12)",
        cta: "0 4px 20px rgba(74,58,255,0.30)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #4A3AFF 0%, #6B5EFF 50%, #8B7FFF 100%)",
        "hero-gradient": "linear-gradient(135deg, #0F0A2E 0%, #1A1350 40%, #2D1F7A 100%)",
        "subtle-gradient": "linear-gradient(180deg, #EEEDFF 0%, #F8F9FA 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
