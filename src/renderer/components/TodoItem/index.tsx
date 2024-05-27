import React from 'react';
import { TodoCallback } from '../../../shared/types';
import styles from './styles.module.css';

type Props = {
  className?: string;
  description: string;
  isCompleted: boolean;
  onUpdate: TodoCallback;
};

export const TodoItem: React.FC<Props> = ({
  className,
  description,
  isCompleted,
  onUpdate,
}) => {
  const itemText = isCompleted ? <s>{description}</s> : <>{description}</>;
  const handleChange = () => {
    onUpdate({ description, isCompleted: !isCompleted });
  };

  return (
    <li className={className}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
      />
      {itemText}
    </li>
  );
};
