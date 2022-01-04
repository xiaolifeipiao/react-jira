/**
@Author: xiaolifeipiao
@Description: 清理对象的空值
@version: 0.0.0
@Date: 2022-01-04 16:22:46
@LastEditTime: 2022-01-04 21:35:57
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\index.ts
 */
//处理0被判断为false
export const isFalsy = (value: any) => (value === 0 ? false : !value);

// 避免对传入的对象进行污染,浅拷贝和深拷贝
export const cleanObject = (object: object) => {
  // Object.assign({}, object);
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
