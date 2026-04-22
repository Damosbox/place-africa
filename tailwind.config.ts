import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Place Africa — Klaviyo-inspired black-first palette
        brand: {
          DEFAULT: "#0A0A0A",   // near-black (primary)
          light: "#1F1F1F",     // hover dark
          dark: "#000000",      // pure black
          subtle: "#F0F0F0",    // light gray cards/tags
          accent: "#FE1B00",    // red-orange accent (CTAs, highlights)
          "accent-subtle": "#FFF0EE", // light red-orange background
        },
        whatsapp: "#25D366",
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 4px rgba(0,0,0,0.08)",
        hover: "0 8px 32px rgba(0,0,0,0.12)",
        cta: "0 4px 16px rgba(0,0,0,0.20)",
        "cta-accent": "0 4px 20px rgba(254,27,0,0.35)",
      },
      backgroundImage: {
        // Klaviyo-style: deep black hero
        "hero-gradient": "linear-gradient(160deg, #000000 0%, #0A0A0A 60%, #111111 100%)",
        // Brand gradient: black to very dark
        "brand-gradient": "linear-gradient(135deg, #0A0A0A 0%, #1F1F1F 100%)",
        // Accent section: orange warm
        "accent-gradient": "linear-gradient(135deg, #FE1B00 0%, #FE4D2B 100%)",
        // Subtle light bg
        "subtle-gradient": "linear-gradient(180deg, #F0F0F0 0%, #FAFAFA 100%)",
      },
      borderRadius: {
        // Klaviyo uses tighter radius = sharper, corporate
        "2xl": "12px",
        "3xl": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
