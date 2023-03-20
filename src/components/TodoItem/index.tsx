import React, { useState } from 'react';

type Props = {
  completed: boolean;
  text: string;
}

export const TodoItem: React.FC<Props> = ({completed, text}) => {
  const [checked, setChecked] = useState(completed);
  const itemText = checked ? <s>{text}</s> : <>{text}</>;
  
  return <li>
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
    {itemText}
  </li>
}