/**
@Author: xiaolifeipiao
@Description: 清理对象的空值
@version: 0.0.0
@Date: 2022-01-04 16:22:46
@LastEditTime: 2022-01-04 16:53:22
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\index.jsx
 */
//处理0被判断为false
export const isFalsy = (value) => (value === 0 ? false : !value);

// 避免对传入的对象进行污染,浅拷贝和深拷贝
export const cleanObject = (object) => {
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
