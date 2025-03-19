/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      tertiarycolor: '#f4f08b', // Light Yellow
      secondarycolor: '#a0a2d0', // Light Lavender Blue
      primarycolor: '#434263', // Dark Slate Blue
      
    },
    },
    
    fontFamily: {
      sans: ['"Source Sans 3"', 'sans-serif'],
    },
    screens: {
      "xs": "450px",

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
}

