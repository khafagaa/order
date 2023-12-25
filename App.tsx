import React from 'react';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import Navigation from '@navigation/index';
import {SafeAreaView, Text, View} from 'react-native';
import CodePush from 'react-native-code-push';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};
function App(): JSX.Element {
  return (
    <ProvidersWrapper>
      <Navigation />
    </ProvidersWrapper>
  );
}

export default CodePush(CodePushOptions)(App);
