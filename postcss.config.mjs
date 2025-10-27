/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Tailwind v3 için bu gereklidir
  },
};

export default config;