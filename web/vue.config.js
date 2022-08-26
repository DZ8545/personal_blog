const { defineConfig } = require("@vue/cli-service");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({
        /* options */
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "",
  outputDir: __dirname + "/../server/web",
});
