import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TodoContext } from '../../TodoContext';

import styles from './TodoCounter';

const TodoCounter = () => {
    const { totalTodos, completedTodos } = useContext(TodoContext);

    return (
        <View style={styles.todoCounter.container}>
            {completedTodos === totalTodos ? (
                <Text style={styles.todoCounter.text}>
                    Completaste todas las tareas!
                </Text>
            ) : (
                <Text style={styles.todoCounter.text}>
                    Has completado <Text style={styles.bold}>{completedTodos}</Text> de <Text style={styles.bold}>{totalTodos}</Text> TODOs
                </Text>
            )}
        </View>
    );
};

export default TodoCounter;