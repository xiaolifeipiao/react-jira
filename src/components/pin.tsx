/**
@Author: xiaolifeipiao
@Description: 收藏的星星收藏
@version: 0.0.0
@Date: 2022-01-22 14:24:46
@LastEditTime: 2022-01-22 14:35:13
@LastEditors: xiaolifeipiao
@FilePath: \src\components\pin.tsx
 */
import { Rate } from 'antd';
import React from 'react';
interface PinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Pin = ({ checked, onCheckedChange, ...restProps }: PinProps) => {
  // !!num和Boolean(num)等价
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckedChange?.(!!num)}
      {...restProps}
    />
  );
};
