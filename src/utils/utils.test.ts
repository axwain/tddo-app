import { describe, expect, it } from '@jest/globals';
import { addTodoItem, findTodoItemIndex, updateTodoList } from '.';
import { Todo } from '../types';

const searchTerm = 'Item 4';
const itemOnList = { description: searchTerm, isCompleted: false };
const items: Todo[] = [
  { description: 'Item 1', isCompleted: false },
  { description: 'Item 2', isCompleted: false },
  { description: 'Item 3', isCompleted: false },
  itemOnList,
];

describe('findTodoItemIndex', () => {
  it('should return the index of an item that is on the todo list', () => {
    const expectedIndex = 3;
    expect(findTodoItemIndex(items, searchTerm)).toBe(expectedIndex);
  });

  it('should return the -1 if the item is not in the todo list', () => {
    expect(findTodoItemIndex(items, 'invalid item')).toBe(-1);
  });
});

describe('addTodoItem', () => {
  it('should add item to a todo list without modifying it', () => {
    const itemToAdd = { description: 'Item 5', isCompleted: false };
    const expectedList = [...items, itemToAdd];
    const list = [...items];

    expect(addTodoItem(list, itemToAdd)).toEqual(expectedList);
    expect(list).toEqual(items);
  });

  it('should not add a todo item with a duplicated description', () => {
    const list = [...items];

    expect(addTodoItem(list, itemOnList)).toEqual(list);
  });
});

describe('updateTodoList', () => {
  it('should not change list if item is not on list', () => {
    const itemNotOnList = {
      description: 'not on list',
      isCompleted: false,
    };
    const list = [...items];

    expect(updateTodoList(list, itemNotOnList)).toEqual(items);
  });

  it('should update item on the list', () => {
    const itemToUpdate = {
      description: itemOnList.description,
      isCompleted: !itemOnList.isCompleted,
    };
    const list = [...items];
    const itemIndex = findTodoItemIndex(list, itemToUpdate.description);

    const updatedList = updateTodoList(list, itemToUpdate);

    expect(updatedList).not.toEqual(list);
    expect(updatedList[itemIndex].description).toEqual(
      list[itemIndex].description
    );
    expect(updatedList[itemIndex].isCompleted).not.toEqual(
      list[itemIndex].isCompleted
    );
  });
});
