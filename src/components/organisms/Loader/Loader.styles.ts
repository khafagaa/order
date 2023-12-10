import {calcFont, calcWidth} from '@utils/responsive-helper.service';
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
      backgroundColor: color.dimmed,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.5,
      position: 'absolute',
      zIndex: 1000,
    },
    icon: {
      backgroundColor: color.white,
      borderRadius: 5,
      overflow: 'hidden',
    },
    txt: {
      color: color.blue,
      fontWeight: 'bold',
      fontSize: calcFont(15),
      marginRight: calcWidth(5),
    },
    starCont: {flexDirection: 'row'},
  });

export default styles;
