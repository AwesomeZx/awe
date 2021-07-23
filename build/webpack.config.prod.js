import { resolve as _resolve } from 'path';
import { assetsPath } from './utils';
import { ProvidePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/dist/plugin';
import WebpackBar from 'webpackbar';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const babelConfig = {
  cacheDirectory: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 9',
            'iOS >= 8',
            'Android >= 4'
          ]
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'awe',
        libraryDirectory: '', // default: lib
        style: true
      }
    ],
    ['@vue/babel-plugin-jsx', { mergeProps: false }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties'
  ]
};

export default (env = {}) => ({
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    'awe-design': './src/index.ts'
  },
  output: {
    path: _resolve(__dirname, '../package'),
    publicPath: '/package/',
    library: 'awe-design',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: false
  },
  // eslint-disable-next-line no-dupe-keys
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: _resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.tsx'],
    alias: {
      vue: '@vue/runtime-dom'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon: '../doc/favicon.ico',
      inject: true
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
    new ProvidePlugin({
      process: 'process/browser'
    })
  ]
});
