import {View, Text, Switch} from 'react-native';
import React, {FC, useState, useContext} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import getColor from '@theme/getColor';
import {ThemeContext} from '@hooks/useThemeContext';
import styles from './atoms.styles';

const ThemeToggle: FC = () => {
  const [toggleValue, setToggle] = useState(true);
  const {theme, changeTheme} = useContext(ThemeContext);

  const changeThem = () => {
    setToggle(!toggleValue);
    changeTheme();
    // dispatch(accessLoading(!loading));
  };
  return (
    <View style={styles(getColor()).container}>
      <Entypo
        name="moon"
        size={30}
        color={theme == 'dark' ? getColor().blue : getColor().dimmed}
        onPress={changeThem}
        style={styles(getColor()).icon}
      />
      <Switch
        value={toggleValue}
        onChange={changeThem}
        thumbColor={getColor().primary}
        style={{marginHorizontal: 7}}
      />
      <Entypo
        name="light-up"
        size={30}
        color={theme == 'light' ? getColor().blue : getColor().dimmed}
        style={styles(getColor()).icon}
        onPress={changeThem}
      />
    </View>
  );
};

export default ThemeToggle;
