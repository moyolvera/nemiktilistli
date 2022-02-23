import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 18,

    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  option: {
    padding: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionText: {
    fontFamily: 'Nunito-Bold'
  },
  selected: {
    backgroundColor: '#e6dbff'
  }
});

export default styles;
