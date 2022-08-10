/* eslint-disable import/no-commonjs */

const path = require('path');

const config = {
  projectName: 'taro-bugs',
  date: '2022-08-10',
  designWidth: 750,
  deviceRatio: {
    375: 2 / 1,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  alias: {
    '/scss': path.resolve('src/scss'),
    '/utils': path.resolve('src/utils'),
    '/hooks': path.resolve('src/hooks'),
    '/images': path.resolve('src/images'),
    '/components': path.resolve('src/components')
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false
    }
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[local]-[hash:8]'
        }
      }
    },
    optimizeMainPackage: {
      enable: true
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[local]-[hash:8]'
        }
      }
    }
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge(config, require('./dev'));
  }

  return merge(config, require('./prod'));
};
