import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import { ErrorMessage } from '.';

describe('ErrorMessage', () => {
  const message = 'Error message';
  const messageParagraph = <p>{message}</p>;
  const RenderErrorMessage = (error = false) => {
    return render(
      <ErrorMessage error={error}>{messageParagraph}</ErrorMessage>
    );
  };
  it('should be empty if no error', () => {
    const { container } = RenderErrorMessage();
    expect(container.childElementCount).toBe(0);
  });
  it('should render error message', () => {
    const { container, queryByText } = RenderErrorMessage(true);
    expect(container.childElementCount).toBe(1);
    expect(queryByText(message)).not.toBeNull();
  });
});
