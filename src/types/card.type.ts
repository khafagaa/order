export type cardTypes = {
  id: number;
  backdrop_path: string;
  vote_count: number;
  release_date: string;
  title: string;
  adult?: boolean | null;
};

export type detailedCardTypes = {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  original_language: string;
  adult?: boolean | null;
};
