import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
      },
      lite:{
        1: 'gray-300',
        2: '#E5E7EB',
        3: '#D1D5DB',
        4: '#9CA3AF',
      },
      blue :{
          1:'#4318FF'
      },
      sky:{
        1: '#C9DDFF',
        2: '#ECF0FF',
        3: '#F5FCFF',
      },
      orange:{
        1:'#FF742E',
       
      },
      purple: {
        1: '#EDEBFE',
      },
      
      green: {
        1: '#05CD99',
        2:'#01B574',
      },
     
    },
      backgroundImage: {
        hero:"url('https://stream-blog-v2.imgix.net/blog/wp-content/uploads/3c9c034acb28c814f1248c685bfc4d94/Top-6-Most-Secure-Video-Calling-Apps-1200x630-1.jpg?auto=format&auto=compress')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config