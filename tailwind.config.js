module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "background":"url(/Background.png)"
      },
      screens: {
        'usm': '300px',
        'msm':'450px',
        'sm':'640px',
        'msl':'900px'
      },
    },
  },
  plugins: [],
}