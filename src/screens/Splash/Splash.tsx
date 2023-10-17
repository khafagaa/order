import {
  View,
  Image,
  Animated,
  Easing,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {FC, useCallback, useEffect, useMemo} from 'react';
import assets from '@assets/images/assets';
import styles from './Splash.styles';
import Circles from '@components/molecules/Circles/Circles';
import {StackActions, useNavigation} from '@react-navigation/native';
const Splash: FC = () => {
  const navigation = useNavigation();
  const bounceValue = useMemo(() => new Animated.Value(0), []);

  const startBounceAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
      Animated.timing(bounceValue, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();
  }, [bounceValue]);
  useEffect(() => {
    startBounceAnimation();
  }, [startBounceAnimation]);
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Login'));
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [navigation]);
  return (
    <ImageBackground source={assets.gradient} style={styles.splashContainer}>
      <Circles style={styles.circles} count={3} />
      <Animated.Image
        source={assets.order}
        style={[
          styles.logo,
          {
            transform: [{scale: bounceValue}],
          },
        ]}
      />
    </ImageBackground>
  );
};

export default Splash;
