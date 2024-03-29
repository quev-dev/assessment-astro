/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'c-lightest': '#ffffe8',
        'c-lighter': '#fae2c8',
        'c-light': '#f2c4ae',
        'c-dark': '#3d3430',
        'c-darker': '#22201d',
        'c-darkest': '#0f151a',
        'c-accent': '#3a6ddc',
      },
    },
  },
  plugins: [],
};
