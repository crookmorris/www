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

  eleventyConfig.setDataDirectory("_data");

  eleventyConfig.addShortcode("social-icons",
    function() {
      return '\n\n<social-icons text="included">\n</social-icons>\n\n';
    }
  );

  eleventyConfig.addShortcode("anchor",
    function(name) {
      return '<a name="'+name+'"></a>';
    }
  );

  eleventyConfig.addPairedShortcode("grid-list",
    function(content) {
      return '<grid-list>\n\n'+content+'\n\n</grid-list>\n';
    }
  );

  eleventyConfig.addPairedShortcode("event",
    /*
      The newlines in this string are important
      so that the markdown parser runs on the content
      and all tags are closed correctly.
    */
    function(content, date, note, override) {
      let note_attr='';
      if (note) {
        note_attr=' note="'+note+'"';
      }
      let override_attr='';
      if (override) {
        override_attr=' override="'+override+'"';
      }
      return '<calendar-event date="'+date+'"'
            + override_attr
            + note_attr
            +'>\n\n'+content
            +'\n\n</calendar-event>\n';
    }
  );
};
