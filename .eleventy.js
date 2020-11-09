const fs = require('fs');
const highlight = require('highlight.js');

const filters = {}
filters.prettycode = function(input) {
  const code = fs.readFileSync(input, "utf8");
  const highlighted = highlight.highlightAuto(code).value;
  return "<pre>"+highlighted+"</pre>";
}

const configObject = {
  dir: {
    input: "eleventy",
    includes: "_includes",
    layouts: "_layouts",
    output: "docs"
  }
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("prettycode", filters.prettycode);
  eleventyConfig.setBrowserSyncConfig({
    server: "docs",
  });
  return configObject;
}