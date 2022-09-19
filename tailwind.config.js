module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#64e0d2",

          "secondary": "#a627d8",

          "accent": "#a1fc94",

          "neutral": "#2F2438",

          "base-100": "#F0F0F0",

          "info": "#1E64F1",

          "success": "#118876",

          "warning": "#F3D749",

          "error": "#ED6E81",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}