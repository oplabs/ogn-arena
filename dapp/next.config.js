
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/^pg-native$/));
    if (isServer) {
      config.externals.push({common:'common'});
    }
    /*
    config.node = {
      ...(config.node || {}),
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
      fs: 'empty',
    };*/
    return config;
  }
}

module.exports = nextConfig
