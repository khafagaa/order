import {View, SafeAreaView, Text} from 'react-native';
import React, {useContext, useState} from 'react';
import {ThemeContext} from '@hooks/useThemeContext';
import getColor from '@theme/getColor';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import {useGetMovies} from '@hooks/useGetMovies';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './Home.styles';
import ThemeToggle from '@components/atoms/ThemeToggle';
import Card from '@components/molecules/Card/Card';
import {movieInfo, movieType} from 'src/types/movie.type';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/navigation.type';
import {addHistory} from '@redux/Historymovies/history.reducer';
const Login = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const {data, isFetching, isLoading} = useGetMovies();
  const pressMovie = (item: movieInfo) => {
    dispatch(addHistory(item));
    navigation.navigate('Details', {movie: item});
  };

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
            size={30}
            color={getColor().white}
            onPress={() => navigation.navigate('History')}
            style={{alignSelf: 'center'}}
          />
          <Text style={{color: getColor().white}}>View History</Text>
        </View>
      </View>

      <View style={styles(getColor()).line} />
      <Card results={data?.results} pressMovie={pressMovie} />
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
