import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonShadow: {
    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    paddingLeft: 5,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 10
  }
});

export default styles;
