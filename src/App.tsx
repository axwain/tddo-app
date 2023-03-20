import React, { useState } from 'react';
import styles from './App.module.css';
import { ErrorMessage } from './components/ErrorMessage';
import { ItemList } from './components/ItemList';
import { NewTodoItem } from './components/NewTodoItem';
import { Todo } from './types';
import { addTodoItem, removeCompletedItems, updateTodoList } from './utils';

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

  const handleClearComplete = () => {
    setItems(removeCompletedItems(items));
    setError(false);
  };

  return (
    <>
      <button className={styles.button} onClick={handleClearComplete}>
        Clear Completed
      </button>
      <ul className={styles.tddoList}>
        <ItemList
          className={styles.item}
          items={items}
          onUpdate={handleUpdate}
        />
        <NewTodoItem className={styles.item} onConfirm={handleAddItem} />
      </ul>
      <ErrorMessage error={error}>
        <p>Item is already on the list</p>
      </ErrorMessage>
    </>
  );
};

export default App;
