import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render a list of items', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
