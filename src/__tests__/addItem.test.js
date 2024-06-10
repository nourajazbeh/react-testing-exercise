// src/__tests__/addItem.test.js
import { addItem } from '../TodoList';

test('fügt ein neues Todo zur Liste hinzu', () => {
  const setTodos = jest.fn();
  const todos = [];

  addItem(todos, setTodos, 'Test Todo');

  expect(setTodos).toHaveBeenCalledWith([
    { text: 'Test Todo', id: expect.any(Number) },
  ]);
});

test('fügt kein leeres Todo hinzu', () => {
  const setTodos = jest.fn();
  const todos = [];

  addItem(todos, setTodos, '');

  expect(setTodos).not.toHaveBeenCalled();
});

test('fügt kein Todo hinzu, wenn Text nur aus Leerzeichen besteht', () => {
  const setTodos = jest.fn();
  const todos = [];

  addItem(todos, setTodos, '   ');

  expect(setTodos).not.toHaveBeenCalled();
});

