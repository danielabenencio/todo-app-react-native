import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  iconContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 30,
    height: 30,
  },
  completedIcon: {
    position: 'absolute',
    color: 'green',
    justifyContent: 'center',
    width: 30,
    height:30,
    
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
