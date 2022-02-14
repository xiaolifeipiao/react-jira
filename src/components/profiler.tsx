/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-14 14:41:31
@LastEditTime: 2022-02-14 14:41:32
@LastEditors: xiaolifeipiao
@FilePath: \src\components\profiler.tsx
 */
import React, { ProfilerOnRenderCallback, ProfilerProps } from 'react';

type Props = { metadata?: any; phases?: ('mount' | 'update')[] } & Omit<ProfilerProps, 'onRender'>;

let queue: unknown[] = [];

const sendProfileQueue = () => {
  if (!queue.length) {
    return;
  }
  const queueToSend = [...queue];
  queue = [];
  console.log(queueToSend);
};

setInterval(sendProfileQueue, 5000);

export const Profiler = ({ metadata, phases, ...props }: Props) => {
  const reportProfile: ProfilerOnRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    if (!phases || phases.includes(phase)) {
      queue.push({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
        metadata,
      });
    }
  };

  return <React.Profiler onRender={reportProfile} {...props} />;
};
