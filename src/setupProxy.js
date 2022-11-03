const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/menu", {
      target: "https://dgucoop.dongguk.edu/mobile",
      changeOrigin: true,
    })
  );
};
