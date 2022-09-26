import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  dot: {
    marginTop: 30
  },
  coming: {
    marginTop: 30,
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Quattrocento-Bold',
    fontWeight: 'bold',
    letterSpacing: -1,
    textTransform: 'uppercase'
  },
  soon: {
    textAlign: 'center',
    color: '#37c1e7',
    fontSize: 40,
    top: -2,
    lineHeight: 22,
    fontFamily: 'Quattrocento-Bold',
    fontWeight: 'bold',
    letterSpacing: -4,
    textTransform: 'uppercase'
  }
});

export default styles;
