const webpack = require('webpack')
const path = require('path')
const config = require('sapper/config/webpack.js')
const pkg = require('./package.json')
const sveltePreprocess = require('svelte-preprocess')
const CopyPlugin = require('copy-webpack-plugin')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const alias = { svelte: path.resolve('node_modules', 'svelte') }
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html']
const mainFields = ['svelte', 'module', 'browser', 'main']

const preprocess = sveltePreprocess({
  // https://github.com/kaisermann/svelte-preprocess/#user-content-options
  sourceMap: dev,
  postcss: {
    plugins: [
      require('tailwindcss'),
      // require("autoprefixer"),
      require('postcss-nesting'),
    ],
  },
})

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev,
              css: true,
              hydratable: true,
              hotReload: true,
              preprocess,
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[contenthash].[ext]',
              },
            },
          ],
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              css: false,
              dev,
              generate: 'ssr',
              hydratable: true,
              preprocess,
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                publicPath: '/',
                name: '[name]-[contenthash].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '__sapper__/dev/server/images'),
            to: path.resolve(__dirname, 'static'),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, '__sapper__/dev/client/'),
            to: path.resolve(__dirname, 'static/client'),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, 'src/assets/logo-192.png'),
            to: path.resolve(__dirname, 'static'),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, 'src/assets/logo-512.png'),
            to: path.resolve(__dirname, 'static'),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, 'src/assets/manifest.json'),
            to: path.resolve(__dirname, 'static'),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, 'src/assets/favicon.ico'),
            to: path.resolve(__dirname, 'static'),
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    mode: process.env.NODE_ENV,
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode: process.env.NODE_ENV,
  },
}
