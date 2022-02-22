import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import {
  DetailsScreen,
  HomeScreen,
  NotFoundScreen,
  PasswordScreen
} from '@screens';

export type RootStackParamList = {
  Home?: { token: string };
  Details: { isSensible?: boolean };
  NotFound: undefined;
  Password: undefined;
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const SCREEN_OPTIONS = { headerShown: false };

const linking = {
  prefixes: [],
  config: {
    screens: {
      Home: 'invitation/:token?',
      Details: 'details',
      Password: 'password',
      NotFound: '*'
    }
  }
};

function Navigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
