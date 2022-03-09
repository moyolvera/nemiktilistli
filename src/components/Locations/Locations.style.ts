import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    padding: 14,
    alignItems: 'center'
  },
  transparent: {
    opacity: 0
  },
  label: {
    fontFamily: 'Quattrocento-Regular',
    fontSize: 12,
    letterSpacing: 2
  },
  locationName: {
    fontFamily: 'Quattrocento-Bold',
    fontSize: 14,
    letterSpacing: 2
  },
  address: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 13
  },
  separator: {
    width: 80,
    height: 20,
    resizeMode: 'contain',
    marginVertical: 10
  },
  pin: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
});

export default styles;
