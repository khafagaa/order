import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Splash} from '@screens/index';
import {useAppSelector} from '@hooks/useRedux';
import {useSelector} from 'react-redux';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import {NavigationContainer} from '@react-navigation/native';

export default function Navigation() {
  const MainStack = createNativeStackNavigator();
  const loading = useSelector(state => state.loading.loading);
  console.log(`now ${loading}`);
  return (
    <>
      <MainStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={Splash} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
      {loading && <LoadingPage />}
    </>
  );
}
