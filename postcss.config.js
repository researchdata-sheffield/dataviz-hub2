const postcssConfig = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")
  ]
};

if (process.env.NODE_ENV === "production") {
  postcssConfig.plugins.push(
    require("cssnano")({
      // use the safe preset so that it doesn't
      // mutate or remove code from our css
      preset: "default"
    })
  );
}

module.exports = postcssConfig;
