/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-13 00:01:05
@LastEditTime: 2022-02-13 00:01:06
@LastEditors: xiaolifeipiao
@FilePath: \src\components\mark.tsx
 */
export const Mark = ({ name, keyword }: { name: string; keyword: string }) => {
  if (!keyword) {
    return <>{name}</>;
  }
  const arr = name.split(keyword);
  return (
    <>
      {arr.map((str, index) => (
        <span key={index}>
          {str}
          {index === arr.length - 1 ? null : <span style={{ color: '#257AFD' }}>{keyword}</span>}
        </span>
      ))}
    </>
  );
};
