/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-21 15:29:25
@LastEditTime: 2022-01-21 15:30:44
@LastEditors: xiaolifeipiao
@FilePath: \src\wdyr.ts
 */
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    //   是否跟踪所以函数组件
    trackAllPureComponents: false,
  });
}
