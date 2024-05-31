import React from 'react';
import { View, StyleSheet } from 'react-native';

const TodoList = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginBottom: 56, 
  },
});

export default TodoList;