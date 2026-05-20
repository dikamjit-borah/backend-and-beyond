module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'boowie':   ['BOOWIE', 'serif'],
        'epilogue': ['Epilogue', 'sans-serif'],
        'barlow':   ['Jost', 'sans-serif'],
      },
      colors: {
        cream:      '#FAF8F4',
        'cream-alt':'#F0EBE3',
        ink:        '#2D0A6B',
        'ink-mid':  '#4A1E8C',
        'ink-light':'#7B56B5',
        accent:     '#E85D00',
        'accent-lt':'#FF7A2F',
        'text-main':'#1A0845',
        'text-sub': '#7B68A8',
      },
      screens: {
        'laptop': '1024px'
      }
    },
  },
  plugins: [],
};
