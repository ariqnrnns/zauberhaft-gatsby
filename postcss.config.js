const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.js", "./src/pages/*.js"],
  safelist: {
    greedy: [/^body/, /body/, /^html/, /html/]
  }
});
const cssnano = require("cssnano")({
  preset: [
    "default",
    {
			cssDeclarationSorter: true,
			discardEmpty: true,
			discardOverridden: true,
			discardDuplicates: true,
			discardComments: true,
			mergeIdents: true,
			mergeLonghand: true,
			mergeRules: false,
			minifySelectors: true,
			minifyParams: true,
			minifyGradients: true,
			minifyFontValues: true,
			normalizeWhitespace: true,
			normalizePositions: true,
			normalizeUrl: true,
			normalizeDisplayValues: true,
			reducetransforms: true,
			reduceIdents: true,
			uniqueSelectors: true,
    },
  ],
});
module.exports = {
  plugins: [
    require("postcss-mixins"),
    require("postcss-import"),
    require("postcss-nested"),
    require("autoprefixer"),
		cssnano,
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
