import { windowDimensions } from '@utils/platform';
import { StyleSheet } from 'react-native';
const { width: WINDOW_WIDTH } = windowDimensions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  content: {
    flex: 1,
    backgroundColor: '#f9f9fb',
    alignSelf: 'center',
    maxWidth: 500,
    minWidth: 380,
    width: WINDOW_WIDTH < 501 ? WINDOW_WIDTH : 380
  }
});

export default styles;
