import React from 'react';
import { TodoItem } from '../TodoItem';

export const ItemList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <TodoItem key={item} completed={false} text={item} />
      ))}
    </>
  );
};
