import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import getColor from '@theme/getColor';

export default function LoadingPage() {
  return (
    <View
      style={{
        backgroundColor: getColor().dimmed,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {<ActivityIndicator size="large" color={getColor().blue} />}
    </View>
  );
}
