export type IMovie = {
    id: string;
    imageUrl: string;
    title: string;
    summary: string;
    rating: string;
}

export interface MovieState {
  allMovies: IMovie[];
  favouriteMovies: IMovie[];
}

export const initialMoviesState: MovieState = {
  allMovies: [],
  favouriteMovies: [],
};

