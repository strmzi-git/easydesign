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
            value: "https://www.easydesign.dev",
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
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE:
      "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",
    NEXT_PUBLIC_STRIPE_SECRET_KEY_LIVE:
      "pk_live_51NRABnHvKmtkdhL0YjiUf4nvGMXqt7ZIt4lwoAwQugMQYQsJ4IpRsLWEZj4vFoRIuYkRzY7xeU9J9fKFYVE03gdM00v3ZbLcDb",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST:
      "pk_test_51NRABnHvKmtkdhL02AD6BABXRyGasTDWkZtNQPDi4pvIn885P7KexM4tywZstd6kZD2OiWoI2ICU7u2BK9QTMjzK00wV5LMrhw",
    NEXT_PUBLIC_STRIPE_SECRET_KEY_TEST:
      "sk_test_51NRABnHvKmtkdhL0Mbn3QbJHYmVnVWujFYy6nNR97R5P437NAB17Xtla4mWDrwRiR2AWRL0XlQ23ODJUtFAAE70c00sGpdyEVS",
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
