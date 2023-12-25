import React from 'react';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import Navigation from '@navigation/index';
import {SafeAreaView, Text, View} from 'react-native';
import CodePush from 'react-native-code-push';
import {
  ConfigCatProvider,
  createConsoleLogger,
  LogLevel,
} from 'configcat-react';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  // mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  installMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
};

function App(): JSX.Element {
  const logger = createConsoleLogger(LogLevel.Info); // Set the log level to INFO to track how your feature flags were evaluated. When moving to production, you can remove this line to avoid too detailed logging.

  return (
    <ConfigCatProvider
      sdkKey="fQXcCJcM3kODssEoek0rmA/6lo1S82dhEulErWEmHPtIQ"
      options={{logger}}>
      <ProvidersWrapper>
        <Navigation />
      </ProvidersWrapper>
    </ConfigCatProvider>
  );
}

export default CodePush(CodePushOptions)(App);
