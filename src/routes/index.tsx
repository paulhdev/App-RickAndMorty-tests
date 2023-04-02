import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import CharacterInfo from '../screens/CharacterInfo';

import { CharacterProps } from '../components/CharacterCard';

export type StackNavigationProps = {
  Home: undefined;
  CharacterInfo: CharacterProps;
};

const Stack = createNativeStackNavigator<StackNavigationProps>();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CharacterInfo" component={CharacterInfo} />
    </Stack.Navigator>
  );
}
