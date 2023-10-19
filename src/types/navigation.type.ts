import {RouteConfig, StackNavigationState} from '@react-navigation/native';
import {movieInfo} from './movie.type';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

//*   type of the single route in app stack
export type AppStackRoutesType = RouteConfig<
  RootStackParamList,
  keyof RootStackParamList,
  StackNavigationState<RootStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Details: {movie: movieInfo};
  History: undefined;
};

export type HomeRouteProp = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
