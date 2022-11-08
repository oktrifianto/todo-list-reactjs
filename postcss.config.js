// ---------------------this
const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./src/Components/**/*.js", "./src/Pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
// ---------------------this
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
