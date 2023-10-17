export type movieType = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type HistoryState = {
  history: movieType[];
};
