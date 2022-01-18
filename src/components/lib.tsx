/**
@Author: xiaolifeipiao
@Description: 定制一个可以改变的组件
@version: 0.0.0
@Date: 2022-01-18 16:17:22
@LastEditTime: 2022-01-18 16:33:35
@LastEditors: xiaolifeipiao
@FilePath: \src\components\lib.tsx
 */
import styled from '@emotion/styled';
export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${(props) => props.marginBottom + 'rem'};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === 'number'
        ? props.gap + 'rem'
        : props.gap
        ? '2rem'
        : undefined};
  }
`;
