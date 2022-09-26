import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import {
  AddEditScreen,
  CommingSoonScreen,
  DetailsScreen,
  ImportScreen,
  HomeScreen,
  ManageScreen,
  NotFoundScreen,
  PasswordScreen
} from '@screens';
import { ManageContext } from '@context/ManageContext';
import { PeopleEntry } from '@actions/people';

export type RootStackParamList = {
  CommingSoon: {};
  Home?: { token: string };
  AddEdit: {
    guest?: PeopleEntry;
  };
  Details: { isSensible?: boolean };
  Import: undefined;
  Manage: undefined;
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
      CommingSoon: '/',
      Home: 'invitation/:token?',
      Details: 'details',
      Password: 'password',
      Manage: 'manage',
      AddEdit: 'edit',
      Import: 'import',
      NotFound: '*'
    }
  }
};

function Navigator() {
  const { canManageContext } = React.useContext(ManageContext);

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
        <Stack.Screen name="CommingSoon" component={CommingSoonScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        {canManageContext && (
          <>
            <Stack.Screen name="Manage" component={ManageScreen} />
            <Stack.Screen name="AddEdit" component={AddEditScreen} />
            <Stack.Screen name="Import" component={ImportScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
