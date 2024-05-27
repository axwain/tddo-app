import React, { useEffect, useState } from 'react';
import { Todo } from '../shared/types';
import styles from './App.module.css';
import { ErrorMessage } from './components/ErrorMessage';
import { ItemList } from './components/ItemList';
import { NewTodoItem } from './components/NewTodoItem';
import { addTodoItem, removeCompletedItems, updateTodoList } from './utils';

const App: React.FC = () => {
  const [error, setError] = useState(false);
  const [items, setItems] = useState<Todo[]>([]);

  const save = (otherList: Todo[]) => {
    console.log('starting save');
    if (otherList !== items) {
      window.api.saveItems(otherList);
    }
  };

  const handleAddItem = (description: string) => {
    const newItem: Todo = { description, isCompleted: false };
    const newList = addTodoItem(items, newItem);
    setItems(newList);
    setError(newList.length === items.length);
    save(newList);
  };

  const handleUpdate = (item: Todo) => {
    const newList = updateTodoList(items, item);
    setItems(newList);
    setError(false);
    save(newList);
  };

  const handleClearComplete = () => {
    const newList = removeCompletedItems(items);
    setItems(newList);
    setError(false);
    save(newList);
  };

  useEffect(() => {
    console.log('Loading items');
    window.api.loadItems().then((items) => {
      setItems(items);
      console.log('finished loading items');
    });

    const closeButton = document.getElementById('closeBtn') as HTMLElement;
    closeButton.onclick = () => {
      window.api.close();
    };
  }, []);

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
