import React from 'react';
import { View, Modal as RNModal, TouchableWithoutFeedback } from 'react-native';

import styles from './Modal'

const Modal = ({ children, visible, onRequestClose }) => {
  return (
    <RNModal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

export default Modal;