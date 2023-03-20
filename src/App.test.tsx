import { describe, expect, it } from '@jest/globals';
import { render } from '@solidjs/testing-library';
import App from './App';

describe('App - sample test', () => {
  it('should render', () => {
    const { queryByText } = render(() => <App />);
    expect(queryByText('Learn Solid')).toBeDefined();
  })
});