module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.25)",
        glassBg: "rgba(255, 255, 255, 0.05)",
        primary: " rgba(247, 247, 247, 0.9)",
        greyTxt: "rgba(3, 41, 61, 0.5)",
        light: "rgba(3, 41, 61, 0.1)",
      },
    },

    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    boxShadow: {
      '4xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    plugins: [],
  },
};
