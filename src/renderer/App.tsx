import React, { useEffect, useState } from 'react';
import { Todo } from '../shared/types';
import styles from './App.module.css';
import { ErrorMessage } from './components/ErrorMessage';
import { ItemList } from './components/ItemList';
import { NewTodoItem } from './components/NewTodoItem';
import { loadItems, saveItems, setupAppFolder } from './storage';
import { addTodoItem, removeCompletedItems, updateTodoList } from './utils';

const App: React.FC = () => {
  const [error, setError] = useState(false);
  const [items, setItems] = useState<Todo[]>([]);
  const [appDir, setAppDir] = useState('');

  const save = (otherList: Todo[]) => {
    console.log('starting save', appDir);
    if (otherList !== items) {
      saveItems(otherList, appDir).then(() => console.log('Items Saved'));
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
    console.log('Setting app folder');
    setupAppFolder()
      .then(async (appFolder: string) => {
        if (appFolder) {
          console.log('appFolder obtained', appFolder);
          const loadedItems = await loadItems(appFolder);
          setAppDir(appFolder);
          setItems(loadedItems);
        }
      })
      .then(() => console.log('finished loading items'));
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
