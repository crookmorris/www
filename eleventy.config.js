import pluginWebc from "@11ty/eleventy-plugin-webc";
import implicitFigures from "markdown-it-image-figures";
import videoEmbeds from "markdown-it-block-embed";

export default function(eleventyConfig) {
  eleventyConfig.setInputDirectory("_src");

  eleventyConfig.addPlugin(pluginWebc, {
    components: "_components/**/*.webc"
  });

  eleventyConfig.addPassthroughCopy("_src/**/*.css");
  eleventyConfig.addPassthroughCopy("_src/assets/**/*");

  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(implicitFigures));
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(videoEmbeds));

  if (process.env.ELEVENTY_ENV_TYPE == "prod") {
    eleventyConfig.setDataDirectory("_data");
  } else {
    eleventyConfig.setDataDirectory("_testdata");
  }

  eleventyConfig.addPairedShortcode("event",
    /*
      The newlines in this string are important
      so that the markdown parser runs on the content
      and all tags are closed correctly.
    */
    function(content, day, date, month) {
      return '<calendar-event day="'+day
            +'" date="'+date
            +'" month="'+month
            +'">\n\n'+content
            +'\n\n</calendar-event>\n';
    }
  )
};
