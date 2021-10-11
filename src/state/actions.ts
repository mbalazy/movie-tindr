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

export type MoviesActions = SetMovies | AcceptMovie | RejectMovie;
