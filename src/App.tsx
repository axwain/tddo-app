import React, { useState } from 'react';
import { ItemList } from './components/ItemList';
import { NewTodoItem } from './components/NewTodoItem';

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const handleAddItem = (text: string) => {
    setItems([...items, text]);
  }
  return (
    <ul>
      <ItemList items={items} />
      <NewTodoItem onConfirm={handleAddItem} />
    </ul>
  );
};

export default App;
