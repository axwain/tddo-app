import { Todo } from '../../shared/types';

export const findTodoItemIndex = (items: Todo[], searchTerm: string) => {
  return items.findIndex((item) => item.description === searchTerm);
};

export const addTodoItem = (items: Todo[], itemToAdd: Todo) => {
  if (findTodoItemIndex(items, itemToAdd.description) < 0) {
    return [...items, itemToAdd];
  }

  return items;
};

export const updateTodoList = (items: Todo[], itemToUpdate: Todo) => {
  const index = findTodoItemIndex(items, itemToUpdate.description);
  if (index < 0) {
    return items;
  }

  const newList = [...items];
  newList.splice(index, 1, itemToUpdate);
  return newList;
};

export const removeCompletedItems = (items: Todo[]) => {
  return items.filter((item) => !item.isCompleted);
};
