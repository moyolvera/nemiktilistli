import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SplashScreen } from '@components';
import customFonts from '@utils/fonts';
import { useFonts } from 'expo-font';

import Navigator from './src/Navigator';

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  return !fontsLoaded ? (
    <SplashScreen />
  ) : (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000'
  }
});
