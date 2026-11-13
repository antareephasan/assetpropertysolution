import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#13140F',
          soft: '#1C1D16',
        },
        paper: {
          DEFAULT: '#F2EFE6',
          deep: '#E8E2D3',
        },
        stone: '#D7D1C1',
        brass: {
          DEFAULT: '#9C7A45',
          light: '#C2A374',
          dark: '#6E552F',
        },
        muted: '#6B6759',
        rust: '#8E3B2C',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        edge: '1680px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
};

export default config;
