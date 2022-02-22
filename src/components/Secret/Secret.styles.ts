import { windowDimensions } from '@utils/platform';
import { StyleSheet } from 'react-native';

const { width } = windowDimensions;

const containerWidth = width < 501 ? width : 380;
const itemWidth = containerWidth / 7 - 6;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  number: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold'
  },
  box: {
    width: itemWidth,
    height: itemWidth,

    shadowColor: '#6060a0',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    borderRadius: itemWidth / 4,

    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
