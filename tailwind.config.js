/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          hover: '#CE8946',
          light: '#F3E4A8',
          accent: '#C59E27',
        },
        taupe: {
          DEFAULT: '#BDB76B',
          light: '#E6E2AF',
          muted: '#8E8946',
          border: 'rgba(189, 183, 107, 0.35)',
        },
        cream: {
          DEFAULT: '#FDFBD4',
          pure: '#FFFFFF',
          card: '#FFFFFF',
          soft: '#F8F5C4',
          subtle: '#FAF8D0',
        },
        bronze: {
          DEFAULT: '#CE8946',
          hover: '#B87232',
        },
        neutralDark: {
          DEFAULT: '#24221D',
          primary: '#171717',
          secondary: '#5F5B50',
          card: '#1F1D18',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'taupe-sm': '0 2px 10px -2px rgba(189, 183, 107, 0.25)',
        'gold-md': '0 8px 30px -4px rgba(212, 175, 55, 0.25)',
        'card-soft': '0 4px 20px -2px rgba(95, 91, 80, 0.08), 0 0 0 1px rgba(189, 183, 107, 0.25)',
        'card-hover': '0 12px 32px -4px rgba(206, 137, 70, 0.2), 0 0 0 1.5px rgba(212, 175, 55, 0.6)',
      }
    },
  },
  plugins: [],
}
