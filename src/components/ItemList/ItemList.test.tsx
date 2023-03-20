import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import { ItemList } from './';

describe('ItemList', () => {
  it('should render a list of items', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const { container, queryByText } = render(<ItemList items={items} />);
    expect(container.childElementCount).toBe(items.length);
    for(const item of items) {
      expect(queryByText(item)).toBeDefined();
    }
  });
});
