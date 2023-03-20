import { describe, expect, it, jest } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import { Todo } from '../../types';
import { ItemList } from './';

describe('ItemList', () => {
  it('should render a list of items', () => {
    const items: Todo[] = [
      { description: 'Item 1', isCompleted: true },
      { description: 'Item 2', isCompleted: false },
      { description: 'Item 3', isCompleted: false },
    ];
    const { container, queryByText } = render(
      <ItemList items={items} onUpdate={jest.fn()} />
    );
    expect(container.childElementCount).toBe(items.length);
    for (const item of items) {
      expect(queryByText(item.description)).not.toBeNull();
    }
  });
});
