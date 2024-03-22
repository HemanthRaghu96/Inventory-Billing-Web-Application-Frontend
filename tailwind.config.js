/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors:{
      sidebarColor:"#f6f6fe",
    },
    fontFamily: {
      SourceSans3: ['Source Sans 3','sans-serif'],
    },
  },
};
export const plugins = [];

