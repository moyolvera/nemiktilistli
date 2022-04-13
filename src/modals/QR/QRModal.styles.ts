import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
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
    fontFamily: 'Nunito-Regular',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 5
  },
  subtitle: {
    fontFamily: 'Nunito-Regular',
    marginBottom: 10,
    maxWidth: 280,
    textAlign: 'center'
  },
  qrWrapper: {},
  guest: {
    fontFamily: 'DancingScript-Regular',
    fontSize: 42,
    marginTop: 8
  }
});

export default styles;
