/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      '2xlg': '1280px',
      xl: '1440px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein100: "slidein 1s ease 100ms forwards",
        slidein300: "slidein 1s ease 300ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein900: "slidein 1s ease 900ms forwards",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rbeanie: ["Reenie Beanie", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      maxWidth: {
        xxl: '1400px',
       
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        transparent: 'transparent',
        white: '#fff',
        black: '#000',
        blackGray: '#292D32',
        offWhite: '#FFFCF7',
        lightGray: '#F5F6F1',
        mudGreen: '#C0C2AA',
        mudGreenDark: '#878C71',
        gray: '#909A99',
        darkGray: '#6C7675',
      },
    },
  },
  plugins: [],
};
