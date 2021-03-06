import { StyleSheet } from 'react-native';
import { LARGE_MODAL_SIZE } from '@utils/platform';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    width: LARGE_MODAL_SIZE,
    height: LARGE_MODAL_SIZE,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: LARGE_MODAL_SIZE,
    height: LARGE_MODAL_SIZE
  },
  gradientTop: {
    position: 'absolute',
    top: 0,
    padding: 8,
    height: 100,
    width: '100%'
  },
  gradientBottom: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 0,
    height: 100,
    padding: 8,
    width: '100%'
  },
  button: {
    flexDirection: 'row'
  },
  subtitle: {
    fontFamily: 'Nunito-Bold',
    marginLeft: 8,
    color: '#6060a0'
  },
  close: {
    top: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  title: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: 34,
    alignSelf: 'center'
  }
});

export default styles;
