import {apiKey} from '@constants/apiKey';
import {queryGetMovies} from '@services/query.getMovies';
import {useMutation, useQuery} from '@tanstack/react-query';

export const useGetMovies = () => {
  let param = apiKey;
  const {} = useQuery(['movies'], () => queryGetMovies.getMovies(param), {
    onSuccess: async res => {},
    onError: async res => {},
  });
};
