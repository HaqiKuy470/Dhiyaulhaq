/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // PENTING: Pakai tanda kutip karena ada karakter @
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};

export default config;