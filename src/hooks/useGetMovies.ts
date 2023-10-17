import {apiKey} from '@constants/apiKey';
import {queryGetMovies} from '@services/query.getMovies';
import {useMutation, useQuery} from '@tanstack/react-query';

export const useGetMovies = () => {
  let param = apiKey;
  const {data, isFetching, isLoading} = useQuery(
    ['movies'],
    () => queryGetMovies.getMovies(param),
    {
      onSuccess: async res => {
        console.log('succss');
      },
      onError: async (err: any) => {
        console.log('now err');
      },
    },
  );

  return {data, isFetching, isLoading};
};
