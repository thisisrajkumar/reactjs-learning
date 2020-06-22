const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
//const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));
const themeVariables = lessToJs(fs.readFileSync(path.resolve(__dirname, './src/styles/hd-ant-custom.less'), 'utf8'));

/*module.exports = withTM(Object.assign({}, withCSS(withLess(withSass({
    transpileModules: ['antd'],
    lessLoaderOptions: {     
    javascriptEnabled: true,     
    modifyVars: themeVariables // overrides Ant variables 
      
      }, 


// }, */
module.exports = {

  //transpileModules: ['antd'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ['import', { libraryName: "antd", style: true }]
            ]
          }
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }]
      }

    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
