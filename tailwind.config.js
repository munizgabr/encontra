const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'header':['font-bb']
    },
    backgroundImage:{
      'topo': "url('../src/images/beachbg.jpg')"
  }
  },
  plugins: [],
}