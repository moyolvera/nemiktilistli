import { Platform } from 'react-native';

function isWeb() {
  return Platform.OS === 'web';
}

export { isWeb };
