import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './CreateTodoButton'

const CreateTodoButton = ({ setOpenModal }) => {
    return (
        <TouchableOpacity
            style={styles.createButton}
            onPress={() => setOpenModal(state => !state)}
        >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
};

export default CreateTodoButton;