import React from 'react';
import type { Todo, TodoCallback } from '../../../shared/types';
import { TodoItem } from '../TodoItem';

type Props = {
  className?: string;
  items: Todo[];
  onUpdate: TodoCallback;
};

export const ItemList: React.FC<Props> = ({ className, items, onUpdate }) => {
  return (
    <>
      {items.map((item) => (
        <TodoItem
          className={className}
          key={item.description}
          isCompleted={item.isCompleted}
          description={item.description}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};
