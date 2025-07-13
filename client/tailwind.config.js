import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b5cf6',  // Purple primary
          hover: '#7c3aed',    // Darker purple on hover
          dark: '#6d28d9',     // Even darker purple
        },
        secondary: {
          DEFAULT: '#ec4899',  // Pink secondary
          hover: '#db2777',    // Darker pink
        },
        accent: {
          DEFAULT: '#f59e0b',  // Amber accent
          light: '#fbbf24',    // Light amber
        },
        surface: '#0f0f23',    // Dark purple-tinted background
        card: '#1e1b3a',       // Purple-tinted card background
        text: {
          primary: '#ffffff',
          secondary: '#d1d5db',
          muted: '#9ca3af',
        },
        border: '#374151',
        purple: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Netflix Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'gradient-hero': 'linear-gradient(rgba(15, 15, 35, 0.4) 0%, rgba(15, 15, 35, 0.7) 50%, rgba(15, 15, 35, 0.9) 100%)',
        'gradient-card': 'linear-gradient(145deg, #1e1b3a 0%, #2d2a4a 100%)',
        'gradient-button': 'linear-gradient(45deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%)',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'elevated': '0 16px 64px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'lg': '16px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [
    forms,
    aspectRatio,
    function({ addUtilities }) {
      addUtilities({
        '.line-clamp-1': {
          'display': '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          'overflow': 'hidden'
        },
        '.line-clamp-2': {
          'display': '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          'overflow': 'hidden'
        },
        '.line-clamp-3': {
          'display': '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          'overflow': 'hidden'
        }
      })
    }
  ],
}
