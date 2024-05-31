import React from 'react';
import { Text, StyleSheet } from 'react-native';

const EmptyTodos = () => {
  return <Text style={styles.container}>Crea tu primer To Do!</Text>;
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
  
})


export default EmptyTodos;
