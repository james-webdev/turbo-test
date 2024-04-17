const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();         // 1

module.exports = withVanillaExtract({                             // 2  {
  transpilePackages: ["design-system"],                    // 3
});
