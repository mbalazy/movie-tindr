import { IMovie } from "./state";

export enum ActionType {
  SetMovies,
  AcceptMovie,
  RejectMovie,
}

export interface SetMovies {
  type: ActionType.SetMovies;
  payload: { movies: IMovie[] };
}

export interface AcceptMovie {
  type: ActionType.AcceptMovie;
  payload: { movie: IMovie };
}

export interface RejectMovie {
  type: ActionType.RejectMovie;
  payload: { movie: IMovie };
}

export const setMovies = (movies: IMovie[]): SetMovies => ({
  type: ActionType.SetMovies,
  payload: { movies },
});

export const rejectMovie = (movie: IMovie): RejectMovie => ({
  type: ActionType.RejectMovie,
  payload: { movie },
});

export const acceptMovie = (movie: IMovie): AcceptMovie => ({
  type: ActionType.AcceptMovie,
  payload: { movie },
});

export type MoviesActions = SetMovies | AcceptMovie | RejectMovie;
