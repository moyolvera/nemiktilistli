import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  toggle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#fff'
  },
  toggleWrapper: {
    width: 30,
    height: 16,
    padding: 1,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginRight: 6
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontSize: 12
  }
});

export default styles;
