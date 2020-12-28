
const { override,addPostcssPlugins} = require('customize-cra')
const path = require('path')
const paths = require('react-scripts/config/paths');
/*此处修改打包路径*/
paths.appBuild = path.join(path.dirname(paths.appBuild), 'hproprietor');

module.exports = override(
  /*px转rem  --- 使用material-ui 与淘宝适配方案冲突 */
  addPostcssPlugins([require("postcss-plugin-px2rem")({ rootValue: 37.5,exclude: false,propBlackList: ['border'],selectorBlackList: ['.skipRem'] })]),
  // addWebpackAlias({
  //   '@/assets/*': path.resolve(__dirname,"src/assets/*")
  // })
)