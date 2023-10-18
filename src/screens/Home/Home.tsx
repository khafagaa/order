import {View, SafeAreaView, Button, Image, Switch, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '@hooks/useThemeContext';
import getColor from '@theme/getColor';
import Splash from '@screens/Splash/Splash';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {accessLoading} from '@redux/Loading/loading.reducer';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import {useGetMovies} from '@hooks/useGetMovies';
import imagePath from '@constants/imagePath';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Home.styles';
import ThemeToggle from '@components/atoms/ThemeToggle';
import Card from '@components/molecules/Card/Card';

const Login = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const [toggleValue, setToggle] = useState(true);
  const loading = useAppSelector(
    (state: {loading: {loading: boolean}}) => state.loading.loading,
  );
  const {data, isFetching, isLoading} = useGetMovies();

  return (
    <SafeAreaView style={styles(getColor()).container}>
      {(isLoading || isFetching) && <LoadingPage />}
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <ThemeToggle />
        <View>
          <Octicons
            name="history"
            size={35}
            color={getColor().white}
            onPress={() => console.log('press')}
            style={{alignSelf: 'center'}}
          />
          <Text style={{color: getColor().white}}>View History</Text>
        </View>
      </View>

      <View style={styles(getColor()).line} />
      <Card results={data?.results} />
    </SafeAreaView>
  );
};

export default Login;

/**
 *       <Text style={{color: getColor().txt}}>change the thems </Text>
      <Image
        style={{width: 200, height: 220, borderRadius: 20}}
        source={{
          uri: `${imagePath}/xvzxqKWltnj6qSiWBXRq6ZCdcrw.jpg`,
        }}
      />
      <AntIcon
        name="caretleft"
        size={30}
        color="#214252"
        onPress={() => console.log('press')}
      />
      <AntIcon
        name="search1"
        size={22}
        color="#214252"
        style={{marginRight: 20}}
      />
      <Icon.Button name="facebook" backgroundColor="#3b5998"></Icon.Button>
      <Button
        color={getColor().txt}
        title="press me"
        onPress={changeThem}></Button>
      <Switch />
 */
