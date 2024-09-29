module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: "class",
  important: true, // important in prod is must be
  plugins: [require("daisyui")],
};