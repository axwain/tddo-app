import React, { useState } from 'react';

type Props = {
  onConfirm: (text: string) => void;
}

export const NewTodoItem: React.FC<Props> = ({ onConfirm }) => {
  const [text, setText] = useState('');
  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      setText('');
      onConfirm(text);
    }
  }
  return <li>
    <input type="checkbox" disabled />
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleOnKeyDown}
    />
  </li>
}