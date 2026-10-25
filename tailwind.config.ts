import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E11',
        surface: '#18181C',
        line: '#222228',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#A9832A',
        },
        body: '#E4E4E7',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(212,175,55,0.15)',
        glowLg: '0 0 40px rgba(212,175,55,0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E5C158 0%, #D4AF37 50%, #A9832A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
