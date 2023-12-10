import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import Navigation from '@navigation/index';
import {SafeAreaView, Text, View} from 'react-native';
import Child from './Child';
import AppLoader from '@components/organisms/Loader';
import {AppLoaderRef} from '@components/organisms/Loader/ShowLoader';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  const [name, setName] = useState(0);
  const [key, setKey] = useState(0);
  console.log(`in app ${AppLoaderRef.current}`);
  return (
    <ProvidersWrapper>
      <AppLoader ref={AppLoaderRef} />
      <Navigation />
    </ProvidersWrapper>
  );
}

export default App;

/**
 *  <View key={key}>
        <Text>here {name}</Text>
        <Text onPress={() => setName(name + 1)}>here plus</Text>
        <Text onPress={() => setKey(key + 1)}>reset</Text>
      </View>



       // <SafeAreaView key={key}>

    {
      /* //   <Text onPress={() => setName(name + 1)}> change name </Text>
    //   <Child {...{name}} /> 
    
    // </SafeAreaView>
 */
