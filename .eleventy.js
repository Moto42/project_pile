const configObject = {
  dir: {
    input: "eleventy",
    includes: "_includes",
    layouts: "_layouts",
    output: "docs"
  }
};

module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    server: "docs",
  });
  return configObject;
}