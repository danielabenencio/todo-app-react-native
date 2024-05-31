import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from './useAsyncStorage';

// Crear el contexto
export const TodoContext = React.createContext();

// Proveedor del contexto
export const TodoProvider = ({ children }) => {
  const { item: todos, saveItem: setTodos, loading, error } = useAsyncStorage('todos', []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    setTodos(newTodos);
  };

  const searchedTodos = searchValue.length
    ? todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : todos;

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
