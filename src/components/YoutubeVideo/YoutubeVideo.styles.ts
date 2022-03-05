import { LARGE_MODAL_SIZE } from '@utils/platform';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: LARGE_MODAL_SIZE,
    height: LARGE_MODAL_SIZE,
    backgroundColor: '#000'
  },
  view: {
    height: LARGE_MODAL_SIZE,
    width: LARGE_MODAL_SIZE
  }
});

export default styles;
