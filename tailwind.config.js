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
        // Light Mode Tokens
        light: {
          bg: '#FAFAF8',
          card: '#FFFFFF',
          text: '#171717',
          secondary: '#66645F',
          accent: '#C49A2C',
          gold: '#F4E8C1',
          border: '#E7E3D8',
          darkSection: '#171717',
          bronze: '#CE8946',
        },
        // Dark Mode Tokens
        dark: {
          bg: '#0F0F0E',
          secondaryBg: '#171716',
          card: '#1D1D1A',
          elevated: '#23231F',
          text: '#F5F3EA',
          secondary: '#B7B4AA',
          accent: '#D4AF37',
          lightAccent: '#F4E8C1',
          border: '#34332E',
          mutedAccent: '#BDB76B',
          bronze: '#CE8946',
          pillBg: '#29281F',
        },
        // Semantic Gold / Accent colors
        gold: {
          DEFAULT: '#C49A2C',
          dark: '#D4AF37',
          light: '#F4E8C1',
          hover: '#CE8946',
        },
        bronze: {
          DEFAULT: '#CE8946',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card-light': '0 2px 8px -2px rgba(23, 23, 23, 0.04), 0 0 0 1px #E7E3D8',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px #34332E',
        'card-hover-light': '0 10px 24px -4px rgba(196, 154, 44, 0.12), 0 0 0 1px #C49A2C',
        'card-hover-dark': '0 10px 24px -4px rgba(212, 175, 55, 0.18), 0 0 0 1px #D4AF37',
      }
    },
  },
  plugins: [],
}
