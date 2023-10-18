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
    check: {
      backgroundColor: color.darkBlue,
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

export default styles;
