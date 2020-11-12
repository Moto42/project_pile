const fs = require('fs');
const highlight = require('highlight.js');

const filters = {}
filters.prettycode = function(input) {
  const code = fs.readFileSync(input, "utf8");
  const highlighted = highlight.highlightAuto(code).value;
  return "<pre>"+highlighted+"</pre>";
}
/**
 * 
 * @param {String} folder path to folder to build TOC for.
 * @returns {String} HTML details node describing the folder and it's contents.
 */
filters.toc = function(folder) {
  console.log(folder)
  const contents = fs.readdirSync(folder);
  const subdirectories = contents.filter(file => fs.statSync(folder+'/'+file).isDirectory());
  const files = contents.filter(file => fs.statSync(folder+'/'+file).isFile());
  const directoryName = folder.slice(folder.lastIndexOf('/'));
  const directoryPath = folder.replace('eleventy','');
  let output = `${directoryName}<ul>\n`;
  subdirectories.forEach(subDir => {
    output += `<li>${filters.toc(folder+'/'+subDir)}</li>\n`;
  });
  files.forEach(file => {
    const fileName = file.slice(0,file.indexOf('.'));
    output += `<li><a href="${directoryPath}/${fileName}">${fileName}</a></li>`;
  });
  output += '</ul>'
  return output;
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
  eleventyConfig.addFilter("toc", filters.toc);
  eleventyConfig.setBrowserSyncConfig({
    server: "docs",
  });
  eleventyConfig.addPassthroughCopy("eleventy/css");
  eleventyConfig.addPassthroughCopy("eleventy/scripts");
  return configObject;
}