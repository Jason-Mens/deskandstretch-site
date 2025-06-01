module.exports = function(eleventyConfig) {
  // 1) Copy these from `src/` → `_site/` without processing:
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/blogs");

  // 2) Tell Eleventy to use `src/` as input and `_site/` as output:
  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};
