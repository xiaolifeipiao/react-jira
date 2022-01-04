/**
@Author: xiaolifeipiao
@Description: custom hook
@version: 0.0.0
@Date: 2022-01-04 17:22:03
@LastEditTime: 2022-01-04 22:28:22
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\index.ts
 */
import { useEffect, useState } from 'react';

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 泛型定义输入类型什么返回什么类型
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  // 监听value和delay的值返回debouncedValue
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    //   每次运行上一个useEffect之后运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

// 练习useArray钩子函数
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
