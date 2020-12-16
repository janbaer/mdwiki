// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@prefresh/snowpack',
    'snowpack-plugin-less',
  ],
  alias: {
    react: 'preact/compat',
    'react-dom': 'preact/compat',
    '@app': './src/app',
    '@images': './src/images',
  },
  devOptions: {
    open: 'none',
    port: 4001,
  },
  buildOptions: {
    sourceMap: true,
  },
};
