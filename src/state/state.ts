export type IMovie = {
    id: string;
    imageUrl: string;
    title: string;
    summary: string;
    rating: string;
}

export interface MoviesState {
  allMovies: IMovie[];
  favouriteMovies: IMovie[];
}

export const initialMoviesState: MoviesState = {
  allMovies: [],
  favouriteMovies: [],
};

