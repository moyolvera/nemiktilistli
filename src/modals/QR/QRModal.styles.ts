import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  close: {
    marginTop: 60,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)'
  },
  title: {
    fontFamily: 'Quattrocento-Bold',
    fontSize: 20,
    letterSpacing: 2,
    marginBottom: 30,
    textTransform: 'uppercase'
  }
});

export default styles;
