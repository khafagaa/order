import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {DetailsRouteProp} from 'src/types/navigation.type';
import imagePath from '@constants/imagePath';
import getColor from '@theme/getColor';
import styles from './Details.styles';
import Star from '@components/atoms/Star';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

const Details: FC<DetailsRouteProp> = ({navigation, route}) => {
  const color = getColor();
  const {movie} = route?.params;
  return (
    <ScrollView style={styles(color).container}>
      <SafeAreaView>
        <FastImage
          style={styles(color).imgContainer}
          resizeMode="stretch"
          source={{
            uri: `${imagePath}${movie?.poster_path}`,
          }}>
          <Ionicons
            name="caret-back"
            size={35}
            color={getColor().darkBlue}
            onPress={() => navigation.goBack()}
            style={styles(color).icn}
          />
          <FastImage
            style={styles(color).img}
            source={{
              uri: `${imagePath}${movie?.backdrop_path}`,
            }}
          />
        </FastImage>
      </SafeAreaView>
      <Text style={styles(color).titleTxt}>
        {`${movie.original_title}  (${movie.release_date?.split('-')?.[0]})`}
      </Text>
      <Star style={styles(color).star} rate={movie.vote_average} />
      <Text style={styles(color).overTxt}>{`Overview`}</Text>
      <Text style={styles(color).titleoverView}>{`${movie.overview} `}</Text>
    </ScrollView>
  );
};

export default Details;
