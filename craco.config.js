/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-17 21:02:43
@LastEditTime: 2022-01-17 21:07:21
@LastEditors: xiaolifeipiao
@FilePath: \craco.config.js
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(0,82,204)',
              '@font-size-base': '16px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
