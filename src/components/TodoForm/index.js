import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TodoContext } from '../../TodoContext';
import styles from './TodoForm.js';

const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const handleSubmit = () => {
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleChange = (value) => {
    setNewTodoValue(value);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Escribe tu nuevo TO DO</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Entregar la TODOapp"
        value={newTodoValue}
        onChangeText={handleChange}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.addButton]} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Añadir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoForm;
