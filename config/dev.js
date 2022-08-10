/* eslint-disable import/no-commonjs */

module.exports = {
  env: {
    NODE_ENV: JSON.stringify('development'),
    BASE_URL: JSON.stringify('http://127.0.0.1:4004')
  },
  cache: {
    enable: true,
    name: 'development'
  }
};
