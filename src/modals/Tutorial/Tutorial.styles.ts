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
  title: {
    position: 'absolute',
    top: 10,
    zIndex: 9,
    fontFamily: 'GreatVibes-Regular',
    fontSize: 24,
    alignSelf: 'center',
    color: 'rgba(255,255,255,0.7)'
  },
  close: {
    top: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export default styles;
