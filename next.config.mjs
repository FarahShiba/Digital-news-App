import withImages from "next-images";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
};

export default withImages(nextConfig);
