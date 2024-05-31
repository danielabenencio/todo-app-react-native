import React from 'react';
import { TextInput, View } from 'react-native';
import { TodoContext } from '../../TodoContext';

import styles from './TodoSearch';

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar tarea..."
        value={searchValue}
        onChangeText={setSearchValue}
      />
    </View>
  );
};

export default TodoSearch;