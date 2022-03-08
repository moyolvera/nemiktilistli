import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8
  },
  labelWrapper: {
    position: 'absolute'
  },
  label: {
    fontFamily: 'Nunito-Regular',
    color: '#999'
  },
  input: {
    marginTop: 18,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderColor: '#ccc',
    padding: 6,
    borderWidth: 1
  },
  error: {
    position: 'absolute',
    right: 8,
    top: 22
  }
});

export default styles;
