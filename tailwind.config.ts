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
        // Cool architectural charcoal / deep slate, drawn from the metallic
        // mark. Primary text, structural borders and dark card fields.
        ink: {
          DEFAULT: '#15191D',
          soft: '#21272D',
        },
        // Crisp cool off-white base with a stone-tinted band for alternates.
        paper: {
          DEFAULT: '#F3F4F5',
          deep: '#E5E8EA',
        },
        stone: '#C9CED2',
        // Retained warm metallic accent: the only non-neutral in the system.
        brass: {
          DEFAULT: '#9C7A45',
          light: '#C2A374',
          dark: '#6E552F',
        },
        muted: '#5C666D',
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
