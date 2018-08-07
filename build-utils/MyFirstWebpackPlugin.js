class MyFirstWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, cb) => {
      const assetNames = [];
      for (const assetName in stats.compilation.assets) {
        assetNames.push(assetName);
      }

      console.log(assetNames.join("\n"));
      //plugin needs to run CB otherwise will not work
      cb();
    });
    compiler.hooks.compilation.tap(
      "MyFirstWebpackPlugin",
      (compilation, params) => {
        const theComp = compilation;
        compilation.hooks.seal.tap("MyFirstWebpackPlugin", () => {
          console.log(theComp);
        });
      }
    );
  }
}

module.exports = MyFirstWebpackPlugin;
