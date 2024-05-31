import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    shadowColor: 'rgba(32, 35, 41, 0.15)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 50,
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: 'rgba(250, 250, 250, 1)',
  },
  text: {
    marginVertical: 24,
    marginLeft: 24,
    width: 'calc(100% - 120px)',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
  },
  completeIcon: {
    position: 'absolute',
    left: 12,
    height: 48,
    width: 48,
    borderRadius: 25,
    backgroundColor: 'rgba(250, 250, 250, 1)', 
  },
  deleteIcon: {
    position: 'absolute',
    top: -24,
    right: 0,
    height: 48,
    width: 48,
    borderRadius: 25,
    backgroundColor: 'rgba(250, 250, 250, 1)',
  },
});

  export default styles;