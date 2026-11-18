import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101310',
        paper: '#f2f3ee',
        muted: '#777e75',
        line: '#d9ddd5',
        acid: '#c9f36a',
        panel: '#191e19',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica Neue', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: { soft: '0 24px 80px rgba(16, 19, 16, .08)' },
      letterSpacing: { tighter2: '-.065em' },
    },
  },
  plugins: [],
};
export default config;
