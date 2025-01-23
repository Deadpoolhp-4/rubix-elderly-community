/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Soft blue
        secondary: '#7ED321', // Gentle green
        background: '#F5F5F5', // Light gray
        surface: '#FFFFFF', // White
        'text-primary': '#333333', // Dark gray
        'text-secondary': '#666666', // Medium gray
      },
    },
  },
  plugins: [],
}
