import getColor from '@theme/getColor';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  circle: {
    borderRadius: 200,
    borderColor: getColor().primary,
    borderWidth: 1.5,
    position: 'absolute',
    alignSelf: 'center',
  },
});
