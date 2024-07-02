/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neutral: ['"Neutral Face"'],
        bungee: ['"Bungee"'],
        bungeeshade: ['"BungeeShade"'],
        poppins: ['"Poppins"'],
        display: ['"Space Grotesque"'],
        mono: ['"Russo One"'],
        body: ['"Inter"'],
        helvetica: ['"Helvetica"'],
      },
      backgroundImage: {
        "logo-background": "url('/images/snowcrash-logo-white.svg')",
      },
      collectionSectionBg: {
        "collection-background": "url('/images/home/collection-bg.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
