import {View, Text} from 'react-native';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {getFilmRate} from '../src/utils/filmRating';
import {getFilmRate} from '../../utils/filmRating';

type props = {
  rate: number;
};
const Star: FC<props> = ({rate}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {new Array(5).fill(1).map((_, indx) => {
        return (
          <View key={indx}>
            {getFilmRate(rate) >= indx + 1 ? (
              <AntDesign name={'star'} size={20} color={'yellow'} />
            ) : (
              <AntDesign name={'staro'} size={20} />
            )}
          </View>
        );
      })}
      <Text>Star</Text>
    </View>
  );
};

export default Star;
