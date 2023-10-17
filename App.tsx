import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Login, Splash} from '@screens/index';

import ProvidersWrapper from '@providers/ProvidersWrapper';
import UseThemeContext from '@hooks/useThemeContext';
import Navigation from '@navigation/index';

function App(): JSX.Element {
  const MainStack = createNativeStackNavigator();

  return (
    <ProvidersWrapper>
      <Navigation />
    </ProvidersWrapper>
  );
}

export default App;
