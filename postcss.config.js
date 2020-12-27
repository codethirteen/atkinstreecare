module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwindcss-animatecss"),
    require("cssnano")({
      preset: "default",
    }),
    //require('@fullhuman/postcss-purgecss')({
    //  content: ['./www/*.html'],
    //  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    //}),
  ],
};
