import {apiKey} from '@constants/apiKey';
import {queryGetMovies} from '@services/query.getMovies';
import {useMutation, useQuery} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

export const useGetMovies = () => {
  let param = apiKey;
  const {data, isFetching, isLoading, refetch} = useQuery(
    ['movies'],
    () => queryGetMovies.getMovies(param),
    {
      onSuccess: async res => {
        return Toast.show({
          type: 'success',
          text1: 'success',
          text2: 'data has been returned successfully',
        });
      },
      onError: async (err: any) => {
        return Toast.show({
          type: 'error',
          text1: 'failed',
          text2: 'their is something went wrong please try again later',
        });
      },
    },
  );

  return {data, isFetching, isLoading, refetch};
};
