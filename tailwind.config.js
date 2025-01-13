/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

