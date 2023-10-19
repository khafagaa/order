import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import Navigation from '@navigation/index';

function App(): JSX.Element {
  return (
    <ProvidersWrapper>
      <Navigation />
    </ProvidersWrapper>
  );
}

export default App;
