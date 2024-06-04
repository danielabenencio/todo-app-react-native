import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import TodoIcon from './index';
import styles from './TodoIcon';

const CompleteIcon = ({ completed, onComplete }) => {

  return (
    <TouchableOpacity onPress={onComplete}>
      <View style={[styles.iconContainer, completed && styles.completedIcon]}>
        <TodoIcon type='check' color={completed ? 'green' : 'gray'} />
      </View>
    </TouchableOpacity>
  );
};

export default CompleteIcon;

