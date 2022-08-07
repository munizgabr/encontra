const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: 'jit',
  purge:{
    enabled: true,
    content: ['./resources/views/**/*/.blande.php', './safelist.txt'],
    options: {
      safelist: []
    }
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'header':['font-bb']
    },
    backgroundImage:{
      'topo': "url('../src/images/pool.jpg')"
  }
  },
  plugins: [],
}