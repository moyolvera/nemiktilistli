import { Platform, Dimensions } from 'react-native';

function isWeb() {
  return Platform.OS === 'web';
}

const windowDimensions = Dimensions.get('window');

export { isWeb, windowDimensions };
