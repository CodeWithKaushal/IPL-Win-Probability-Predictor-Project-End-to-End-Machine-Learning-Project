/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-gray-50",
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "text-gray-50",
    "text-gray-100",
    "text-gray-200",
    "text-gray-300",
    "text-gray-400",
    "text-gray-500",
    "text-gray-600",
    "text-gray-700",
    "text-gray-800",
    "text-gray-900",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0072BC",
          hover: "#005a99",
          100: "#cce5ff", // Light blue for backgrounds
        },
        secondary: {
          DEFAULT: "#FF6600",
          hover: "#e05a00",
        },
      },
    },
  },
  plugins: [],
};
