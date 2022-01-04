/**
@Author: xiaolifeipiao
@Description: custom hook
@version: 0.0.0
@Date: 2022-01-04 17:22:03
@LastEditTime: 2022-01-04 21:37:35
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\index.ts
 */
import { useEffect, useState } from 'react';

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  // 监听value和delay的值返回debouncedValue
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //   每次运行上一个useEffect之后运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
