import { describe, expect, it, jest } from '@jest/globals';
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { NewTodoItem } from '.';

describe('NewTodoItem', () => {
  const keyCode = 'Enter';
  it('should render', () => {
    const mockedItemText = 'Mocked Item Text';
    const onConfirmMock = jest.fn();
    const { queryByRole } = render(<NewTodoItem onConfirm={onConfirmMock} />);
    const checkbox = queryByRole('checkbox') as HTMLInputElement;
    const input = queryByRole('textbox') as HTMLInputElement;

    expect(checkbox).not.toBeNull();
    expect(checkbox?.disabled).toBeTruthy();
    expect(input).not.toBeNull();
    expect(input?.value).toBe('');

    act(() => {
      fireEvent.change(input, { target: { value: mockedItemText } });
      expect(input?.value).toBe(mockedItemText);
      fireEvent.keyDown(input, { code: keyCode });
    })

    expect(onConfirmMock).toHaveBeenCalledWith(mockedItemText);
    expect(input?.value).toBe('');
  })
})