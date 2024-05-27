import { describe, expect, it, jest } from '@jest/globals';
import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { TodoItem } from '.';

describe('TodoItem', () => {
  const description = 'Todo Item';
  const getStrikeOutEl = (el: HTMLElement) => el.getElementsByTagName('s');
  const renderTodoItem = (isCompleted = false, onUpdateMock = jest.fn()) => {
    return render(
      <TodoItem
        description={description}
        isCompleted={isCompleted}
        onUpdate={onUpdateMock}
      />,
    );
  };

  it('renders without strikeout if it is not completed', () => {
    const { container, getByRole, queryByText } = renderTodoItem();
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(getStrikeOutEl(container).length).toBe(0);
    expect(queryByText(description)).not.toBeNull();
    expect(checkbox.checked).toBeFalsy();
  });

  it('renders with strikeout if it is completed', () => {
    const { container, getByRole, queryByText } = renderTodoItem(true);
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(getStrikeOutEl(container).length).toBe(1);

    //Verify that the strike out text element is the element that has the text
    //It could be outside of it and still have queryByText return an element
    expect(getStrikeOutEl(container)[0].textContent).toBe(description);

    //It verifies that there's only one occurrence of the description
    expect(queryByText(description)).not.toBeNull();
    expect(checkbox.checked).toBeTruthy();
  });

  it('calls onUpdate when checkbox is clicked', () => {
    const onUpdateMock = jest.fn();
    const { getByRole } = renderTodoItem(false, onUpdateMock);
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    act(() => {
      fireEvent.click(checkbox);
    });

    expect(onUpdateMock).toHaveBeenCalledWith({
      description,
      isCompleted: true,
    });
  });
});
