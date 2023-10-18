import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home, Splash} from '@screens/index';
import {useSelector} from 'react-redux';
import LoadingPage from '@screens/LoadingPage/LoadingPage';

export default function Navigation() {
  const MainStack = createNativeStackNavigator();
  const loading = useSelector(state => state.loading.loading);
  return (
    <>
      <MainStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={Splash} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Details" component={Details} />
      </MainStack.Navigator>
      {loading && <LoadingPage />}
    </>
  );
}
