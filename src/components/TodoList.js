import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';

export const addTodo = (todos, newTodo) => {
  if (!newTodo.text.trim()) {
    return todos;
  }
  return [...todos, newTodo];
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('/api/todos');
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = (text) => {
    const newTodo = { text, id: Date.now() };
    setTodos((prevTodos) => addTodo(prevTodos, newTodo));
  };

  return (
    <div>
      <TodoForm addTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
