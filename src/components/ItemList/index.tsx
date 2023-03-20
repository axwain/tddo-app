import React from 'react';
import { Todo, TodoCallback } from '../../types';
import { TodoItem } from '../TodoItem';

type Props = {
  items: Todo[];
  onUpdate: TodoCallback;
};

export const ItemList: React.FC<Props> = ({ items, onUpdate }) => {
  return (
    <>
      {items.map((item) => (
        <TodoItem
          key={item.description}
          isCompleted={item.isCompleted}
          description={item.description}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};
