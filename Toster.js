import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animatable,
  TouchableHighlight,
  I18nManager,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '@hooks/useRedux';
import {accessLoading} from '@redux/Loading/loading.reducer';
import assets from '@assets/images/assets';
import styles from '@screens/Splash/styles';

const Toster = ({timer = 3, text = ' check'}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(accessLoading(false));
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      {timer >= 3 && (
        <SafeAreaView style={styles.notiContainer}>
          <Image style={styles.logo} source={assets.order} />
          <View style={styles.row}>
            <Text style={styles.text}>{'notification.content.title'}</Text>
            <Text style={styles.body}>{'notification.content.body'}</Text>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Toster;
