import React, { useState } from 'react';
import { ErrorMessage } from './components/ErrorMessage';
import { ItemList } from './components/ItemList';
import { NewTodoItem } from './components/NewTodoItem';
import { Todo } from './types';
import { addTodoItem, updateTodoList } from './utils';

const App: React.FC = () => {
  const [error, setError] = useState(false);
  const [items, setItems] = useState<Todo[]>([]);

  const handleAddItem = (description: string) => {
    const newItem: Todo = { description, isCompleted: false };
    const newList = addTodoItem(items, newItem);
    setItems(newList);
    setError(newList.length === items.length);
  };

  const handleUpdate = (item: Todo) => {
    setItems(updateTodoList(items, item));
    setError(false);
  };

  return (
    <>
      <ul>
        <ItemList items={items} onUpdate={handleUpdate} />
        <NewTodoItem onConfirm={handleAddItem} />
      </ul>
      <ErrorMessage error={error}>
        <p>Item is already on the list</p>
      </ErrorMessage>
    </>
  );
};

export default App;
