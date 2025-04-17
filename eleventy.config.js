import implicitFigures from "markdown-it-image-figures";
import videoEmbeds from "markdown-it-block-embed";

export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("_src");
  eleventyConfig.addPassthroughCopy("_src/**/*.css");
  eleventyConfig.addPassthroughCopy("_src/assets/**/*");

  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(implicitFigures));
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(videoEmbeds));

  if (process.env.ELEVENTY_ENV_TYPE == "prod") {
    eleventyConfig.setDataDirectory("_data");
  } else {
    eleventyConfig.setDataDirectory("_testdata");
  }
};
