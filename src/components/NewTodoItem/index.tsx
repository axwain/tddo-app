import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

type Props = {
  className?: string;
  onConfirm: (text: string) => void;
};

export const NewTodoItem: React.FC<Props> = ({ className, onConfirm }) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      setText('');
      onConfirm(text);
    }
  };

  const focusInput = () => {
    inputRef?.current?.focus();
  };

  useEffect(() => {
    // events.on('windowFocus', focusInput);

    return () => {
      // events.off('windowFocus', focusInput);
    };
  });

  useEffect(focusInput, []);

  return (
    <li className={className}>
      <input className={styles.checkbox} type="checkbox" disabled />
      <input
        className={styles.textInput}
        type="text"
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
    </li>
  );
};
