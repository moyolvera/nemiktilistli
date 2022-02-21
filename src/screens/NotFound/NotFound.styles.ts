import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    padding: 20
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    textAlign: 'center'
  },
  link: {
    color: '#854fff'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  }
});

export default styles;
