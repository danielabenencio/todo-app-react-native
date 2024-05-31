import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  TodoItem: {
    backgroundColor: '#FAFAFA',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  TodoItemText: {
    marginHorizontal: 24,
    marginBottom: 24,
    width: '70%',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    alignContent: "center,"
  },
  TodoItemTextComplete: {
    textDecorationLine: 'line-through',
    color: '#888',
  }
});

export default styles;
