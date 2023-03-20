import React from 'react';
import { TodoCallback } from '../../types';

type Props = {
  isCompleted: boolean;
  description: string;
  onUpdate: TodoCallback;
};

export const TodoItem: React.FC<Props> = ({
  description,
  isCompleted,
  onUpdate,
}) => {
  const itemText = isCompleted ? <s>{description}</s> : <>{description}</>;
  const handleChange = () => {
    onUpdate({ description, isCompleted: !isCompleted });
  };

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      {itemText}
    </li>
  );
};
