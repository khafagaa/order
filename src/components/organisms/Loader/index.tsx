import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React, {forwardRef} from 'react';
import getColor from '@theme/getColor';
import styles from './Loader.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export interface AppLoaderRefType {
  loading?: boolean;
  toggle: (loading: boolean) => void;
}
const AppLoader = forwardRef<AppLoaderRefType>(({}, ref) => {
  const {height: screenHeight} = Dimensions.get('screen');
  const opacity = useSharedValue(0);
  const height = useSharedValue(0);

  const toggle = (loading: boolean) => {
    height.value = screenHeight;

    opacity.value = withTiming(
      loading ? 1 : 0,
      {duration: 1000},
      isFinished => {
        if (isFinished && !loading) height.value = 0;
      },
    );
  };

  React.useImperativeHandle(ref, () => ({
    toggle,
  }));

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      height: height.value,
    };
  });

  React.useImperativeHandle(ref, () => ({toggle}));

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#00000060',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999999,
          overflow: 'visible',
        },
        animatedStyle,
      ]}>
      <ActivityIndicator size="large" color={getColor().blue} />
    </Animated.View>
  );
});

export default AppLoader;
