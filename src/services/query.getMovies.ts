import {HttpClient} from '@services/HttpClinet';
import {AxiosResponse} from 'axios';
import {recievedData} from 'src/types/movie.type';
export const queryGetMovies = {
  getMovies: (params: string): Promise<AxiosResponse<recievedData>> =>
    HttpClient.get(
      `api.themoviedb.org/3/movie/popular?api_key=${params}&language=en-US&pag`,
    ).then(res => res),
};
