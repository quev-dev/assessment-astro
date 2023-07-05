/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'c-bg': '#fff',
        'c-bg-darker': '#e7e7e7',
        'c-bg-darkest': 'cdd0d8',
      },
    },
  },
  plugins: [],
};
