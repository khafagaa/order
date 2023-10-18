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
      alignSelf: 'flex-start',
      flexDirection: 'row',
      borderRadius: 20,
      shadowRadius: 20,
      borderColor: color.white,
      justifyContent: 'space-between',
    },
    icon: {
      backgroundColor: color.white,
      borderRadius: 5,
      overflow: 'hidden',
    },
  });

export default styles;
