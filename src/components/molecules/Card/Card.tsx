import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {cardTypes} from 'src/types/card.type';

const Card: FC<cardTypes> = ({
  id,
  backdrop_path,
  release_date,
  title,
  vote_count,
  adult,
}) => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

export default Card;
