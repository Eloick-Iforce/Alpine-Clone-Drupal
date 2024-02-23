/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html.twig"],
  theme: {
    extend: {
      fontFamily: {
        alpine: ['"Alpine, "sans-serif"']
      },
      backgroundImage: {
        hero: "url('/sites/default/files/inline-images/c08748122b.png')"
      }
    }
  },
  plugins: []
};
