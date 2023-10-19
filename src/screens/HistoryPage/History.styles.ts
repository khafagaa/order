import getColor from '@theme/getColor';
import {calcHeight, calcWidth} from '@utils/responsive-helper.service';
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
      backgroundColor: color.primary,
    },
    icn: {
      alignSelf: 'flex-start',
      margin: calcWidth(14),
      //   backgroundColor: color.shadow,
      borderRadius: 20,
      justifyContent: 'center',
    },
    rmIcn: {
      alignSelf: 'center',
      margin: calcWidth(14),
      marginTop: calcHeight(20),
      //   backgroundColor: color.,
      borderRadius: 20,
    },
    empty: {
      color: color.shadow,
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: calcHeight(20),
      paddingHorizontal: calcWidth(20),
    },
  });

export default styles;
