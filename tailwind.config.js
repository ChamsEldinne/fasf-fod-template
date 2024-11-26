/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors:{
        "co1":"rgb(255 251 242)" ,
       "co2":"rgb(246 ,216 ,118)",
       }
    },
  },
  plugins: [],
};
