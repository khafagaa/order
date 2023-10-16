import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Button,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ThemeContext} from '@hooks/useThemeContext';
import getColor from '@theme/getColor';
import Splash from '@screens/Splash/Splash';
const Login = () => {
  const {theme, changeTheme} = useContext(ThemeContext);

  const changeThem = () => changeTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: getColor().primary,
      }}>
      <Text style={{color: getColor().txt}}>change the thems </Text>
      <Button
        color={getColor().txt}
        title="press me"
        onPress={changeThem}></Button>
    </SafeAreaView>
  );
};

export default Login;
