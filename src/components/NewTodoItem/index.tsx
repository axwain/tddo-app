import React, { useState } from 'react';
import styles from './styles.module.css';

type Props = {
  className?: string;
  onConfirm: (text: string) => void;
};

export const NewTodoItem: React.FC<Props> = ({ className, onConfirm }) => {
  const [text, setText] = useState('');
  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      setText('');
      onConfirm(text);
    }
  };
  return (
    <li className={className}>
      <input className={styles.checkbox} type="checkbox" disabled />
      <input
        className={styles.textInput}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
    </li>
  );
};
