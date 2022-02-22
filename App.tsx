import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { useFonts } from 'expo-font';
import { SplashScreen } from '@components';
import customFonts from '@utils/fonts';
import FIREBASE_CONFIG from '@utils/firebase';
import { ToastProvider } from 'react-native-toast-notifications';
import { Feather } from '@expo/vector-icons';
import ManageProvider from '@context/ManageContext';

import Navigator from './src/Navigator';

initializeApp(FIREBASE_CONFIG);

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  return !fontsLoaded ? (
    <SplashScreen />
  ) : (
    <View style={styles.container}>
      <ToastProvider
        placement="top"
        offset={20}
        successIcon={<Feather name="check-circle" size={18} color="#fff" />}
        dangerIcon={<Feather name="alert-circle" size={18} color="#fff" />}
        warningIcon={<Feather name="alert-triangle" size={18} color="#fff" />}>
        <ManageProvider>
          <StatusBar style="auto" />
          <Navigator />
        </ManageProvider>
      </ToastProvider>
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
