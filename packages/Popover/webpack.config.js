const path = require("path");
const NODE_ENV = process.env.NODE_ENV; // 获取环境变量
const isProd = NODE_ENV === "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 每次构建清除上一次打包出来的文件
const nodeExternals = require("webpack-node-externals");
const plugins = isProd
  ? [new CleanWebpackPlugin()]
  : [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./Popover/index.html"
      })
    ];
module.exports = {
  mode: isProd ? "production" : "development",
  entry: isProd ? "./src/Popover.js" : "./Popover/index.js",
  output: {
    filename: "Popover.js",
    path: path.resolve(__dirname, "./dist"),
    library: "Popover",
    libraryTarget: isProd ? "umd" : undefined, // umd通用node和浏览器环境
    umdNamedDefine: true,
    globalObject: "this"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]",
          outputPath: "font/"
        }
      }
    ]
  },
  devServer: {
    clientLogLevel: "warning",
    contentBase: "dist",
    hot: true,
    compress: true,
    host: "0.0.0.0",
    useLocalIp: true,
    port: 8112,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: "",
    quiet: true,
    watchOptions: {
      poll: false
    }
  },
  externals: isProd ? [nodeExternals()] : [],
  plugins,
  devtool: 'inline-source-map', 
};
