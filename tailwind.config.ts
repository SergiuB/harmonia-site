import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hand-tl": "url('/hand-tl.svg')",
        "hand-tr": "url('/hand-tr.svg')",
        "hand-br": "url('/hand-br.svg')",
        "hand-bl": "url('/hand-bl.svg')",
        head: "url('/head.svg')",
        img1: "url('/img1.avif')",
        img2: "url('/img2.jpg')",
        img3: "url('/img3.webp')",
      },
      colors: {
        reddish: "#CD959C",
        blueish: "#80B9C4",
        purplish: "#7995C1",
        darkblue: "#224884",
      },
      animation: {
        "glow-red": "glow-red 1s ease-in-out infinite alternate",
        rotate05: "rotate05 1s linear infinite alternate",
        rotate0minus5: "rotate0minus5 1s linear infinite alternate",
      },
      keyframes: {
        "glow-red": {
          from: {
            "text-shadow":
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #CD959C, 0 0 40px #CD959C, 0 0 50px #CD959C, 0 0 60px #CD959C, 0 0 70px #CD959C",
          },
          to: {
            "text-shadow":
              "0 0 20px #fff, 0 0 30px #CD959C, 0 0 40px #CD959C, 0 0 50px #CD959C, 0 0 60px #CD959C, 0 0 70px #CD959C, 0 0 80px #CD959C",
          },
        },

        rotate05: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(5deg)",
          },
        },
        rotate0minus5: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-5deg)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
