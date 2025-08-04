module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'boowie': ['BOOWIE', 'sans-serif'],
        'neutraface': ['Neutraface', 'sans-serif'],
      },
      screens: {
        'laptop': '1024px'
      }
    },
  },
  plugins: [],
};