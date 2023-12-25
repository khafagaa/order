import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import getColor from '@theme/getColor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Home.styles';

const Footer = ({refetch}) => {
  return (
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
  );
};

export default Footer;
