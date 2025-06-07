module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy these files as-is
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
