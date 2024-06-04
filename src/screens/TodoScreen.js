import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TodoContext } from "../TodoContext/index.js";
import TodoCounter from "../components/TodoCounter/index.js";
import TodoSearch from "../components/TodoSearch/index.js";
import TodoItem from "../components/TodoItem/index.js";
import TodosLoading from "../components/TodosLoading/index.js";
import EmptyTodos from "../components/EmptyTodos/index.js";
import CreateTodoButton from "../components/CreateTodoButton/index.js";
import Modal from "../Modal";
import TodoForm from "../components/TodoForm/index.js";
import TodoList from "../components/TodoList/index.js";


const TodoScreen = () => {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo,
  } = useContext(TodoContext);

  if (loading) {
    return (
      <View>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error loading todos.</Text>
      </View>
    );
  }

  return (
    <View>
      <View>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {searchedTodos.length === 0 && <EmptyTodos />}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal visible={openModal} onRequestClose={() => setOpenModal(false)}>
            <TodoForm onSubmit={addTodo} onClose={() => setOpenModal(false)} />
          </Modal>
        )}
      </View>
    </View>
  );
};

export default TodoScreen;

