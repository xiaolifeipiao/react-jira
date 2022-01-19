/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-19 17:47:24
@LastEditTime: 2022-01-19 18:06:43
@LastEditors: xiaolifeipiao
@FilePath: \src\components\error-boundry.ts
 */
// https://github.com/bvaughn/react-error-boundary
// 自己实现简单的react-error-boundary
import React, { ReactNode } from 'react';

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;
// export class ErrorBoundary extends React.Component<{
//   children: ReactNode;
//   fallbackRender: FallbackRender;
// }> {}
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // 当子组件抛出异常，这里会接受并调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    } else {
      return children;
    }
  }
}
