import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  completedIcon: {
    color: 'green',
  },
  iconContainerDelete: {
    position: "absolute",
    right: 20,
    bottom: 5,
  },
  deleteIconPressed: {
    color: 'lightcoral',
  },
});

export default styles;
