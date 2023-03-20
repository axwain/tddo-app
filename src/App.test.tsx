import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App - sample test', () => {
  it('should render', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('React')).toBeDefined();
  });
});
