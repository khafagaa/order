import {NavigationContainer} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ReactQueryProvider} from '@providers/ReactQuiry.provider';
import {ThemeProvider} from '@providers/Theme.provider';
import {store} from '../redux/store';
import {Provider} from 'react-redux';

const ProvidersWrapper: FC<{children: ReactNode}> = ({children}) => (
  <Provider store={store}>
    <ReactQueryProvider>
      <ThemeProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </ReactQueryProvider>
  </Provider>
);

export default ProvidersWrapper;
