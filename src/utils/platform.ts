import { Platform, Dimensions } from 'react-native';

function isWeb() {
  return Platform.OS === 'web';
}

const windowDimensions = Dimensions.get('window');

const { width: WINDOW_WIDTH } = windowDimensions;
const SIZE = WINDOW_WIDTH < 501 ? WINDOW_WIDTH : 380;
const LARGE_MODAL_SIZE = SIZE - 20;

export { isWeb, LARGE_MODAL_SIZE, windowDimensions };
