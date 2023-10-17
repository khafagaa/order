import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ThemeContext} from '@hooks/useThemeContext';
import getColor from '@theme/getColor';
import Splash from '@screens/Splash/Splash';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {accessLoading} from '@redux/Loading/loading.reducer';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
const Login = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const loading = useAppSelector(state => state.loading.loading);
  console.log('loading', loading);
  const dispatch = useAppDispatch();

  const changeThem = () => {
    changeTheme();
    dispatch(accessLoading(!loading));
  };
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
