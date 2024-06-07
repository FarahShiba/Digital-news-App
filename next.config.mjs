import { createRequire } from "module";
const require = createRequire(import.meta.url);

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      use: [
        {
          loader: require.resolve("webp-loader"),
          options: {
            quality: 75,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
