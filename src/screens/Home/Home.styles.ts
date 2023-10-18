import getColor from '@theme/getColor';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';

const styles = (color: colors) =>
  StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: color.darkBlue,
      flex: 1,
    },
    line: {
      margin: 5,
      alignSelf: 'center',
      width: '95%',
      borderWidth: 1,
      elevation: 4,
      shadowColor: 'white',
    },
  });

export default styles;
