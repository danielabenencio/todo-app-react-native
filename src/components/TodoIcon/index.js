import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import checkImage from '../../../assets/check.png';
import deleteImage from '../../../assets/delete.png';

const iconTypes = {
  check: (color) => <Image source={checkImage} style={{ width: 30, height: 30, tintColor: color }} />,
  delete: (color) => <Image source={deleteImage} style={{ width: 24, height: 24, tintColor: color }} />,
};

const TodoIcon = ({ type, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View  >
        {iconTypes[type](color)}
      </View>
    </TouchableOpacity>
  );
};

export default TodoIcon;
