/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-13 01:35:05
@LastEditTime: 2022-02-13 01:54:08
@LastEditors: xiaolifeipiao
@FilePath: \src\components\drag-and-drop.tsx
 */
import React, { ReactNode } from 'react';
import {
  Droppable,
  Draggable,
  DroppableProps,
  DroppableProvided,
  DroppableProvidedProps,
  DraggableProps,
} from 'react-beautiful-dnd';

type DropProps = Omit<DroppableProps, 'children'> & { children: ReactNode };
export const Drop = ({ children, ...props }: DropProps) => {
  return (
    <Droppable {...props}>
      {(provided) => {
        if (React.isValidElement(children)) {
          return React.cloneElement(children, {
            ...provided.droppableProps,
            ref: provided.innerRef,
            provided,
          });
        }
        return <div />;
      }}
    </Droppable>
  );
};

type DropChildProps = Partial<{ provided: DroppableProvided } & DroppableProvidedProps> &
  React.HTMLAttributes<HTMLDivElement>;
export const DropChild = React.forwardRef<HTMLDivElement, DropChildProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
      {props.provided?.placeholder}
    </div>
  )
);

type DragProps = Omit<DraggableProps, 'children'> & { children: ReactNode };
export const Drag = ({ children, ...props }: DragProps) => {
  return (
    <Draggable {...props}>
      {(provided) => {
        if (React.isValidElement(children)) {
          return React.cloneElement(children, {
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            ref: provided.innerRef,
          });
        }
        return <div />;
      }}
    </Draggable>
  );
};
