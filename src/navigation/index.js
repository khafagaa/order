import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Splash} from '@screens/index';

export default function Navigation() {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Splash" component={Splash} />
      <MainStack.Screen name="Login" component={Login} />
    </MainStack.Navigator>
  );
}
