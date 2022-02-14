/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-14 15:17:27
@LastEditTime: 2022-02-14 15:18:45
@LastEditors: xiaolifeipiao
@FilePath: \src\__tests__\use-async.ts
 */
import { act, renderHook } from '@testing-library/react-hooks';
import { useAsync } from 'hooks/use-async';

const defaultState: ReturnType<typeof useAsync> = {
  stat: 'idle',
  data: null,
  error: null,

  isIdle: true,
  isLoading: false,
  isError: false,
  isSuccess: false,

  run: expect.any(Function),
  setData: expect.any(Function),
  setError: expect.any(Function),
  retry: expect.any(Function),
};

const loadingState: ReturnType<typeof useAsync> = {
  ...defaultState,
  stat: 'loading',
  isIdle: false,
  isLoading: true,
};

const successState: ReturnType<typeof useAsync> = {
  ...defaultState,
  stat: 'success',
  isIdle: false,
  isSuccess: true,
};

test('useAsync 可以异步处理', async () => {
  let resolve: any, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const { result } = renderHook(() => useAsync());
  expect(result.current).toEqual(defaultState);

  let p: Promise<any>;
  act(() => {
    p = result.current.run(promise);
  });
  expect(result.current).toEqual(loadingState);
  const resolvedValue = { mockedValue: 'resolved' };
  await act(async () => {
    resolve(resolvedValue);
    await p;
  });
  expect(result.current).toEqual({
    ...successState,
    data: resolvedValue,
  });
});
