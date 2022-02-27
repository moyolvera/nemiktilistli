import { StyleSheet } from 'react-native';
import { windowDimensions } from '@utils/platform';
const { width: WINDOW_WIDTH } = windowDimensions;

const SIZE = WINDOW_WIDTH < 501 ? WINDOW_WIDTH : 380;
const ITEM_SIZE = SIZE - 20;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: ITEM_SIZE,
    height: ITEM_SIZE
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
