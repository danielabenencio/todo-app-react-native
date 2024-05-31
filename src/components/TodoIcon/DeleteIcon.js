import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import TodoIcon from './index';
import styles from './TodoIcon'; 

const DeleteIcon = ({ onDelete }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <TouchableOpacity onPress={onDelete} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={[styles.iconContainer, styles.iconContainerDelete, isPressed ? styles.deleteIconPressed : null]}>
        <TodoIcon type='delete' color='gray' />
      </View>
    </TouchableOpacity>
  );
};

export default DeleteIcon;
