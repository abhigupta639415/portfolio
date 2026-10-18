/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080b11',
          surface: '#0d131f',
          card: '#121a2b',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#182238'
        },
        brand: {
          blue: '#3b82f6',
          sky: '#38bdf8',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.12), transparent 70%)',
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(56, 189, 248, 0.25)',
        'glow-md': '0 0 35px -5px rgba(99, 102, 241, 0.3)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
