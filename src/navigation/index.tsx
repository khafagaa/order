import React from 'react';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Details, Home, Splash, History} from '@screens/index';
import {useSelector} from 'react-redux';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import {
  AppStackRoutesType,
  RootStackParamList,
} from 'src/types/navigation.type';
import {RouteConfig, StackNavigationState} from '@react-navigation/native';

export default function Navigation() {
  const loading = useSelector(state => state.loading.loading);

  // strictly typed array of app stack routes
  const appStackRoutes: Array<AppStackRoutesType> = [
    {
      name: 'Splash',
      component: Splash,
    },
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'Details',
      component: Details,
    },
    {
      name: 'History',
      component: History,
    },
  ];

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {appStackRoutes.map(stackRoute => (
          <Stack.Screen key={stackRoute.name} {...stackRoute} />
        ))}
      </Stack.Navigator>
      {loading && <LoadingPage />}
    </>
  );
}
