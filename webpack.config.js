const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: "./src/index.ts",
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    redux: {
      root: "Redux",
      commonjs2: "redux",
      commonjs: "redux",
      amd: "redux"
    }
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: 'useRedux',
    libraryTarget: 'umd'
  },
  plugins: [
      new CleanWebpackPlugin()
  ]
};

if(process.env.ANALYSE === 'true') {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;