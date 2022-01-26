/**
@Author: xiaolifeipiao
@Description: useAsync
@version: 0.0.0
@Date: 2022-01-19 14:51:28
@LastEditTime: 2022-01-26 16:09:16
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-async.ts
 */

import { useMountedRef } from 'hooks';
import { useCallback, useReducer, useState } from 'react';

interface State<D> {
  error: Error | null;
  data: D | null;
  stat: 'idle' | 'loading' | 'error' | 'success';
}

const defaultInitialState: State<null> = {
  stat: 'idle',
  data: null,
  error: null,
};
//是否抛出异常
const defaultConfig = {
  throwOnError: false,
};

const useSafeDispatch = <T>(dispatch: (...args: T[]) => void) => {
  const mountedRef = useMountedRef();
  return useCallback(
    (...args: T[]) => {
      mountedRef.current ? dispatch(...args) : void 0;
    },
    [dispatch, mountedRef]
  );
};

export const useAsync = <D>(
  initialState?: State<D>,
  initialConfig?: typeof defaultConfig
) => {
  // 对象要解析才能覆盖
  const config = { ...defaultConfig, ...initialConfig };
  const [state, dispatch] = useReducer(
    (state: State<D>, action: Partial<State<D>>) => ({ ...state, ...action }),
    {
      ...defaultInitialState,
      ...initialState,
    }
  );
  const safeDisPatch = useSafeDispatch(dispatch);
  //useState直接传入函数的含义是：惰性初始化；所以要用useState保存函数，不能直接传入函数
  const [retry, setRetry] = useState(() => () => {});
  const setData = useCallback(
    (data: D) =>
      safeDisPatch({
        data,
        stat: 'success',
        error: null,
      }),
    [safeDisPatch]
  );
  const setError = useCallback(
    (error: Error) =>
      safeDisPatch({
        error,
        stat: 'error',
        data: null,
      }),
    [safeDisPatch]
  );
  // run用来触发异步请求
  const run = useCallback(
    (promise: Promise<D>, runConfig?: { retry: () => Promise<D> }) => {
      if (!promise || !promise.then) {
        throw new Error('请传入 Promise类型数据');
      }
      setRetry(() => () => {
        if (runConfig?.retry) {
          run(runConfig?.retry(), runConfig);
        }
      });
      safeDisPatch({ stat: 'loading' });
      return promise
        .then((data) => {
          setData(data);
          return data;
        })
        .catch((error) => {
          // catch会消化异常，如果不自动抛出，外边接受不到异常
          setError(error);
          // console.log(config.throwOnError);
          if (config.throwOnError) return Promise.reject(error);
          return error;
        });
    },
    [safeDisPatch, setData, setError, config.throwOnError]
  );
  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    run,
    setData,
    setError,
    // 调用retry,重新run一遍，然后使得state刷新一遍
    retry,
    ...state,
  };
};
