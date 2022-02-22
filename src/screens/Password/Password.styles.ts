import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10
  },
  title: {
    marginTop: 16,
    paddingHorizontal: 40,
    lineHeight: 16,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold'
  },
  image: {
    width: '100%',
    height: 250
  },
  animatedWrap: {
    marginTop: 16,
    flexDirection: 'row'
  }
});

export default styles;
