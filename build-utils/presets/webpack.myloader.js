const myLoader = () => ({
  resolveLoader: {
    alias: {
      "my-loader": require.resolve("../my-loader.js")
    }
  },
  module: {
    rules: [{ test: /\.js$/, use: "my-loader" }]
  }
});

module.exports = myLoader;
