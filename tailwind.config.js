/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      loginBackground: "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')",
    },
    colors:{
      sidebarColor:"#f6f6fe",
      buttonColor:'#149bff',
    },
    fontFamily: {
      SourceSans3: ['Source Sans 3','sans-serif'],
    }
  },
};
export const plugins = [];
