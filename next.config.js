const withLess = require('@zeit/next-less')


const withSass = require('@zeit/next-sass'); 
const withCSS = require('@zeit/next-css'); 
const withLess = require('@zeit/next-less'); 
const withTM = require('@weco/next-plugin-transpile-modules'); 

const lessToJS = require('less-vars-to-js'); 
module.exports = withLess({
  cssModules: true
})