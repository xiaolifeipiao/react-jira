/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-15 18:47:11
@LastEditTime: 2022-01-15 18:56:33
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\ts的高级类型学习.ts
 */
export {};
// type和interface,下面这种情况interface无法替代
type Favorite = number | string;
let roseFavorite: Favorite = '6';
// interface也无法实现Utility type
type Person = {
  name: string;
  age: number;
};
const xiaoMing: Partial<Person> = {};
const shenMiRen: Omit<Person, 'name' | 'age'> = {};
type PersonKeys = keyof Person;
type PersonOnlyName = Pick<Person, 'name' | 'age'>;
type Age = Exclude<PersonKeys, 'name'>;

// Partial的实现
