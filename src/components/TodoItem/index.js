import { Text, View } from 'react-native';
import React from 'react';
import CompleteIcon from '../TodoIcon/CompleteIcon';
import DeleteIcon from '../TodoIcon/DeleteIcon';

import styles from './TodoItem';

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <View style={styles.TodoItem}>
      <CompleteIcon 
        completed={completed}
        onComplete={onComplete}
      />

      <Text 
        style={[styles.TodoItemText, completed && styles.TodoItemTextComplete]}
      >
        {text}
      </Text>
      
      <DeleteIcon
        onDelete={onDelete}
      />
    </View>
  );
};

export default TodoItem;

