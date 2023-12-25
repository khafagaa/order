import ThemeToggle from '@components/atoms/ThemeToggle';
import Card from '@components/molecules/Card/Card';
import {useGetMovies} from '@hooks/useGetMovies';
import {useAppDispatch} from '@hooks/useRedux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {addHistory} from '@redux/Historymovies/history.reducer';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import getColor from '@theme/getColor';
import {useFeatureFlag} from 'configcat-react';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import {movieInfo} from 'src/types/movie.type';
import {RootStackParamList} from 'src/types/navigation.type';
import Footer from './Footer';
import styles from './Home.styles';
const Home = () => {
  const {value: isAwesomeFeatureEnabled, loading} = useFeatureFlag(
    'historyflag',
    false,
  );

  console.log(`let check feature flag ${isAwesomeFeatureEnabled}`);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const {data, isFetching, isLoading, refetch} = useGetMovies();

  const pressMovie = (item: movieInfo) => {
    dispatch(addHistory(item));
    navigation.navigate('Details', {item});
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
        {isAwesomeFeatureEnabled && (
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
        )}
      </View>

      <View style={styles(getColor()).line} />
      {data?.results?.length ? (
        <Card results={data?.results} pressMovie={pressMovie} />
      ) : (
        <Footer {...{refetch}} />
      )}
    </SafeAreaView>
  );
};

export default Home;
