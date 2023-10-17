import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ThemeContext} from '@hooks/useThemeContext';
import getColor from '@theme/getColor';
import Splash from '@screens/Splash/Splash';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {accessLoading} from '@redux/Loading/loading.reducer';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import {useGetMovies} from '@hooks/useGetMovies';
import imagePath from '@constants/imagePath';
const Login = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const loading = useAppSelector(state => state.loading.loading);
  const dispatch = useAppDispatch();
  const {data, isFetching, isLoading} = useGetMovies();
  console.log(`eh ${JSON.stringify(data)}`);
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
      {(isLoading || isFetching) && <LoadingPage />}
      <Text style={{color: getColor().txt}}>change the thems </Text>
      <Image
        style={{width: 200, height: 220, borderRadius: 20}}
        source={{
          uri: `${imagePath}/xvzxqKWltnj6qSiWBXRq6ZCdcrw.jpg`,
        }}
      />
      <Button
        color={getColor().txt}
        title="press me"
        onPress={changeThem}></Button>
    </SafeAreaView>
  );
};

export default Login;
