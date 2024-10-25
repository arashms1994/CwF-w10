/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
      colors: {
        desert: "#956232",
        mohammad: {
          950: "#17275c",
        },
      },
    },
  },
  plugins: [],
};
