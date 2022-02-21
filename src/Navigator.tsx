import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { DetailsScreen, HomeScreen, NotFoundScreen } from '@screens';

export type RootStackParamList = {
  Home?: { token: string };
  Details: undefined;
  NotFound: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
