/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-25 14:51:33
@LastEditTime: 2022-01-26 15:45:09
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-undo.ts
 */
import { useCallback, useReducer, useState } from 'react';

const UNDO = 'UNDO';
const REDO = 'REDO';
const SET = 'SET';
const RSET = 'REST';

type State<T> = {
  past: T[];
  present: T;
  future: T[];
};

type Action<T> = {
  newPresent?: T;
  type: typeof UNDO | typeof REDO | typeof SET | typeof RSET;
};

const undoReducer = <T>(state: State<T>, action: Action<T>) => {
  const { past, present, future } = state;
  const { newPresent } = action;
  switch (action.type) {
    case UNDO: {
      // const { past, present, future } = currentState;
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    }
    case REDO: {
      if (future.length === 0) return state;
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    }
    case SET: {
      if (newPresent === present) {
        return state;
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    }
    case RSET: {
      return {
        past: [],
        present: newPresent,
        future: [],
      };
    }
  }
  return state;
};

export const useUndo = <T>(initialPresent: T) => {
  const [state, dispatch] = useReducer(undoReducer, {
    past: [],
    present: initialPresent,
    future: [],
  } as State<T>);
  // 合并状态，复杂度降低
  // const [state, setState] = useState<{
  //   past: T[];
  //   present: T;
  //   future: T[];
  // }>({
  //   past: [],
  //   present: initialPresent,
  //   future: [],
  // });
  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = useCallback(() => {
    dispatch({ type: UNDO });
  }, []);

  const redo = useCallback(() => {
    dispatch({ type: REDO });
  }, []);

  const set = useCallback((newPresent: T) => {
    dispatch({ type: SET, newPresent });
  }, []);

  const reset = useCallback((newPresent: T) => {
    dispatch({ type: RSET, newPresent });
  }, []);
  return [
    state,
    {
      set,
      reset,
      undo,
      redo,
      canRedo,
      canUndo,
    },
  ] as const;
};
