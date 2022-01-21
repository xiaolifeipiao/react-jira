/**
@Author: xiaolifeipiao
@Description: 返回页面url中，指定键的参数值
@version: 0.0.0
@Date: 2022-01-21 15:01:24
@LastEditTime: 2022-01-21 16:19:19
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\url.ts
 */
import { useMemo, useState } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { cleanObject } from 'utils';

/**
 * 返回页面url中，指定键的参数值
 */
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParam] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || '' };
        }, {} as { [key in K]: string }),
      [searchParams]
    ),
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = cleanObject({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParam(o);
    },
  ] as const;
};

// export const useSetUrlSearchParam = () => {
//   const [searchParams, setSearchParam] = useSearchParams();
//   return (params: { [key in string]: unknown }) => {
//     //   iterator fromEntries遍历一个iterator转化为一个对象
//     const o = cleanObject({
//       ...Object.fromEntries(searchParams),
//       ...params,
//     }) as URLSearchParamsInit;
//     return setSearchParam(o);
//   };
// };
