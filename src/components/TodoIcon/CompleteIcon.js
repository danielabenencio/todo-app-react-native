import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import TodoIcon from './index';
import styles from './TodoIcon';

const CompleteIcon = ({ completed, onComplete }) => {
  

  return (
    <TouchableOpacity  >
      <View>
        <TodoIcon style={[styles.iconContainer, completed && styles.completedIcon]} onPress={onComplete} type='check' color={completed ? 'green' : 'gray'} />
      </View>
    </TouchableOpacity>
  );
};

export default CompleteIcon;

