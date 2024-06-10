import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import TodoIcon from './index';
import styles from './TodoIcon'; 

const DeleteIcon = ({ onDelete }) => {
 

  return (
    <TouchableOpacity >
      <View>
        <TodoIcon  style={[styles.iconContainer, styles.iconContainerDelete]} onPress={onDelete} type='delete' color='gray' />
      </View>
    </TouchableOpacity>
  );
};

export default DeleteIcon;
