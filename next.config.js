/** @type {import('next').NextConfig} */

module.exports = {
  async headers() {
    return [
      {
        source: "/api/create-checkout-session",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "false" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.easydesign",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
          },
        ],
      },
      {
        source: "/api/stripe-webhooks",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "false" },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
          },
        ],
      },
    ];
  },

  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Fixes npm packages that depend on `encoding` module
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /node_modules\/node-fetch\/lib\/index\.js/,
        (resource) => {
          resource.request = resource.request.replace(
            "node_modules/node-fetch/lib/index.js",
            "node_modules/node-fetch/browser.js"
          );
        }
      )
    );

    return config;
  },
};
