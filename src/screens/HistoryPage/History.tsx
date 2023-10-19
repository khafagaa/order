import {View, SafeAreaView, Text} from 'react-native';
import React, {FC} from 'react';
import {useAppSelector} from '@hooks/useRedux';
import Card from '@components/molecules/Card/Card';
import getColor from '@theme/getColor';
import styles from './History.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {removeAllHistory} from '@redux/Historymovies/history.reducer';

const History: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const movie = useAppSelector(state => state.history.history);
  console.log('eh ', movie.length);
  const color = getColor();
  const removeHistory = () => dispatch(removeAllHistory());
  return (
    <SafeAreaView style={styles(color).container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Ionicons
          name="caret-back"
          size={40}
          color={getColor().shadow}
          onPress={() => navigation.goBack()}
          style={styles(color).icn}
        />
        <Octicons
          name="repo-deleted"
          size={35}
          color={getColor().shadow}
          onPress={removeHistory}
          style={styles(color).rmIcn}
        />
      </View>
      {movie.length < 1 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={styles(color).empty}>{`your history is empty 😂😜`}</Text>
        </View>
      ) : (
        <Card results={movie} pressMovie={() => {}} />
      )}
    </SafeAreaView>
  );
};

export default History;
