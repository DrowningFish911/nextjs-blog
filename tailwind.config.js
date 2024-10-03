module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,md}',
    './components/**/*.{js,ts,jsx,tsx,mdx,md}',
    './pages/**/*.{js,ts,jsx,tsx,mdx,md}'],
  darkMode: "class",
  important: true, // important in prod is must be
  plugins: [require("daisyui"),
            require('@tailwindcss/typography')
  ],
};