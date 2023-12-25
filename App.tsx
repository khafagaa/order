import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import Navigation from '@navigation/index';
import codePush from 'react-native-code-push';

function App(): JSX.Element {
  return (
    <ProvidersWrapper>
      <Navigation />
    </ProvidersWrapper>
  );
}

export default codePush(App);
