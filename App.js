import React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import TodoScreen from "./src/screens/TodoScreen";
import { TodoProvider } from './src/TodoContext/index.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoProvider>
        <TodoScreen />
      </TodoProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: 
    { flex: 1,}
  ,
});
