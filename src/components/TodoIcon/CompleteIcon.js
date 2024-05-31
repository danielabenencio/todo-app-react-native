import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import TodoIcon from './index';
import styles from './TodoIcon';

const CompleteIcon = ({ completed, onComplete }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <TouchableOpacity onPress={onComplete} onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={[styles.iconContainer, completed && styles.completedIcon]}>
        <TodoIcon type='check' color={completed ? 'green' : 'gray'} />
      </View>
    </TouchableOpacity>
  );
};

export default CompleteIcon;

