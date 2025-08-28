/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('daisyui'),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4899",
        secondary: "#a855f7",
        accent: "#f43f5e",
        neutral: "#1f2937",
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) translateX(10px) rotate(2deg)' },
        },
      },
      colors: {
        // Modern color palette with deeper, richer tones
        primary: {
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecae5',
          300: '#fd9fcc',
          400: '#fb6aac',
          500: '#f43f8f',
          600: '#e11d7a',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        // Secondary with fuchsia tones
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        // Accent with vibrant pink
        accent: {
          50: '#fff0f9',
          100: '#ffe5f6',
          200: '#ffccee',
          300: '#ff99dd',
          400: '#ff66cc',
          500: '#ff2eb3',
          600: '#e5008c',
          700: '#b3006e',
          800: '#800050',
          900: '#4d0030',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Cormorant Garamond', 'serif'], // More elegant serif for headings
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
        'soft-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
