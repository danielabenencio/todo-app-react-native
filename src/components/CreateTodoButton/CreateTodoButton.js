import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    createButton: {
        flex: 1,
        backgroundColor: '#61DAFA',
        borderRadius: 32,
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 700,
        right: 20,
        shadowColor: '#61DAFA',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 25,
        elevation: 5, 
    },
    buttonText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FAFAFA',
    },
});


export default styles;