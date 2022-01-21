/**
@Author: xiaolifeipiao
@Description: 定制一个可以改变的组件
@version: 0.0.0
@Date: 2022-01-18 16:17:22
@LastEditTime: 2022-01-19 17:26:15
@LastEditors: xiaolifeipiao
@FilePath: \src\components\lib.tsx
 */
import styled from '@emotion/styled';
import { Spin, Typography } from 'antd';
import { DevTools } from 'jira-dev-tool';
import React from 'react';
// 公共列表项样式组件
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

// 公共loading组件
export const FullPageLoading = () => (
  <FullPage>
    <Spin size="large" />
  </FullPage>
);
// 全局样式loading样式
const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <DevTools />;
    <Typography.Text type="danger">{error?.message}</Typography.Text>
  </FullPage>
);