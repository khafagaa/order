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

const Login = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const [toggleValue, setToggle] = useState(false);
  const loading = useAppSelector(state => state.loading.loading);
  const dispatch = useAppDispatch();
  const {data, isFetching, isLoading} = useGetMovies();
  const changeThem = () => {
    setToggle(!toggleValue);
    changeTheme();
    // dispatch(accessLoading(!loading));
  };
  return (
    <SafeAreaView style={styles(getColor()).check}>
      <View
        style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            borderRadius: 20,
            shadowRadius: 20,
            borderColor: 'white',
            justifyContent: 'space-between',
          }}>
          <Entypo
            name="moon"
            size={35}
            color={theme == 'dark' ? getColor().blue : getColor().dimmed}
            onPress={() => console.log('press')}
            style={{
              backgroundColor: getColor().white,
              borderRadius: 5,
            }}
          />
          <Switch
            value={toggleValue}
            onChange={changeThem}
            thumbColor={getColor().primary}
            style={{marginHorizontal: 7}}
          />
          <Entypo
            name="light-up"
            size={35}
            color={theme == 'light' ? getColor().blue : getColor().dimmed}
            style={{
              backgroundColor: getColor().white,
              borderRadius: 5,
            }}
            onPress={() => console.log('press')}
          />
        </View>
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

      <Button
        color={getColor().txt}
        title="view history"
        onPress={changeThem}></Button>
      {(isLoading || isFetching) && <LoadingPage />}
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
