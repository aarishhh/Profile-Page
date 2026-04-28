/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#ebf8ff',
          100: '#bee3f8',
          200: '#90cdf4',
          300: '#63b3ed',
          400: '#4299e1',
          500: '#3182ce',
          600: '#2b6cb0',
          700: '#2c5282',
          800: '#2a4365',
          900: '#1A365D',
        },
        dark: {
          900: '#070d1a',
          800: '#0a1020',
          700: '#0d1526',
          600: '#111827',
          500: '#1a202c',
          400: '#2d3748',
          300: '#4a5568',
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
