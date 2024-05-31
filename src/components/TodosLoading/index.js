import React from 'react';
import { View, Text, Animated } from 'react-native';

import styles from './TodosLoading';

const TodosLoading = () => {
  const animatedValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    })
  ).start();

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['rgba(250, 250, 250, 1)', 'rgb(200, 199, 199)', 'rgba(250, 250, 250, 1)']
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <View style={styles.completeIcon} />
      <Text style={styles.text}></Text>
      <View style={styles.deleteIcon} />
    </Animated.View>
  );
};

export default TodosLoading;