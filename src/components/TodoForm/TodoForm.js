import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    width: '90%',
    maxWidth: 300,
    backgroundColor: '#fff',
    paddingVertical: 33,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1E1E1F',
    marginBottom: 26,
  },
  textarea: {
    backgroundColor: '#F9FBFC',
    borderWidth: 2,
    borderColor: '#202329',
    borderRadius: 2,
    shadowColor: '#202329',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    color: '#1E1E1F',
    fontSize: 20,
    textAlign: 'center',
    padding: 12,
    height: 96,
    width: '100%',
    marginHorizontal: 12.5,
  },
  placeholder: {
    color: '#a5a5a5',
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },
  buttonContainer: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    cursor: 'pointer',
    fontSize: 20,
    color: '#202329',
    fontWeight: '400',
    width: 120,
    height: 48,
    borderRadius: 2,
    fontFamily: 'Montserrat',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#61DAFA',
    shadowColor: '#61DAFA',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 25,
  },
  cancelButton: {
    backgroundColor: 'transparent',
  },
});

export default styles;