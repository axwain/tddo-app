import { describe, expect, it } from '@jest/globals';
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TodoItem } from '.';

describe('TodoItem', () => {
  it('allows to change the state of a todo item', () => {
    const text = 'Todo Item';
    const { container, getByRole, queryByText } = render(
      <TodoItem completed={false} text={text} />
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    const getStrikeOutEl = () => container.getElementsByTagName('s');

    expect(checkbox.checked).toBeFalsy();
    expect(getStrikeOutEl().length).toBe(0);
    expect(queryByText(text)).toBeDefined();

    act(() => {
      fireEvent.click(checkbox);
    });

    expect(checkbox.checked).toBeTruthy();
    expect(getStrikeOutEl().length).toBe(1);
    //Verify that the strike out text element is the element that has the text
    //It could be outside of it and still have queryByText return an element
    expect(getStrikeOutEl()[0].textContent).toBe(text);
    expect(queryByText(text)).toBeDefined();

    act(() => {
      fireEvent.click(checkbox);
    });

    expect(checkbox.checked).toBeFalsy();
    expect(getStrikeOutEl().length).toBe(0);
    expect(queryByText(text)).toBeDefined();
  });
});
