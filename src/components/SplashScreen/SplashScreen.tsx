import * as React from 'react';
import { View } from 'react-native';
import AppLoading, { AppLoadingProps } from 'expo-app-loading';
import { isWeb } from '@utils/platform';

interface SplashScreenProps {
  config?: AppLoadingProps;
}

function SplashScreen({ config }: SplashScreenProps) {
  return (
    <>
      <AppLoading {...config} />
      {isWeb() && <View />}
    </>
  );
}

export default SplashScreen;
