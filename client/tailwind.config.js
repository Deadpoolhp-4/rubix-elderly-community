/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#a5b4fc',
        background: '#f8fafc',
        surface: '#ffffff',
        'text-primary': '#1e293b',
        'text-secondary': '#64748b',
      },
    },
  },
  plugins: [],
}
