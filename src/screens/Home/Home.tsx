import {View, SafeAreaView, Text, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import getColor from '@theme/getColor';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import {useGetMovies} from '@hooks/useGetMovies';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Home.styles';
import ThemeToggle from '@components/atoms/ThemeToggle';
import Card from '@components/molecules/Card/Card';
import {movieInfo} from 'src/types/movie.type';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/navigation.type';
import {addHistory} from '@redux/Historymovies/history.reducer';
const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const {data, isFetching, isLoading, refetch} = useGetMovies();
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
      {data?.results?.length ? (
        <Card results={data?.results} pressMovie={pressMovie} />
      ) : (
        <View style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}>
          <Text style={styles(getColor()).txt}>refetch data</Text>
          <Ionicons
            name="reload-circle"
            size={50}
            color={getColor().white}
            onPress={() => refetch()}
            style={{alignSelf: 'center'}}
          />
          <Button
            color={getColor().txt}
            title="press me"
            onPress={() => refetch()}></Button>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
