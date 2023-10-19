import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {card, cardInfo} from 'src/types/card.type';
import styles from './Card.styles';
import getColor from '@theme/getColor';
import imagePath from '@constants/imagePath';
import Star from '@components/atoms/Star';
import {movieInfo} from 'src/types/movie.type';
import FastImage from 'react-native-fast-image';

const Card: FC<{results: card; pressMovie: (item: movieInfo) => void}> = ({
  results,
  pressMovie,
}) => {
  let color = getColor();
  const RenderItem: ListRenderItem<movieInfo> = ({item}) => {
    return (
      <TouchableOpacity
        style={styles(color).container}
        onPress={() => pressMovie(item)}>
        <View style={{flexDirection: 'row'}}>
          <FastImage
            style={styles(color).img}
            source={{
              uri: `${imagePath}${item?.backdrop_path}`,
            }}
          />
          <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <Text numberOfLines={2} style={styles(color).titleTxt}>
              {item?.title}
            </Text>
            {item?.adult && <Text>{`this film for ${item?.adult}`}</Text>}
            <Text numberOfLines={2} style={styles(color).txt}>
              {`vote : ${item?.vote_count}`}
            </Text>
            <Text numberOfLines={2} style={styles(color).txt2}>
              {`release : ${item?.release_date}`}
            </Text>
            <Star
              rate={item?.vote_average}
              style={{justifyContent: 'space-evenly'}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <React.Fragment>
      <FlatList
        data={results}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, indx) => String(indx)}
        renderItem={RenderItem}
        //* performance properities
        removeClippedSubviews={false}
        maxToRenderPerBatch={15}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
      />
      <View style={{}}></View>
    </React.Fragment>
  );
};

export default Card;
