import { ActionType, MovieActions } from "./actions";
import { MovieState } from "./state";

export function movieReducer(
  state: MovieState,
  action: MovieActions
): MovieState {
  switch (action.type) {
    case ActionType.SetMovies:
      return { ...state, allMovies: action.payload.movies };

    case ActionType.AcceptMovie:
      return {
        ...state,
        allMovies: [
          ...state.allMovies.filter(
            (movie) => movie.id !== action.payload.movie.id
          ),
        ],
        favouriteMovies: [...state.favouriteMovies, action.payload.movie],
      };

    case ActionType.RejectMovie:
      return {
        ...state,
        allMovies: [
          ...state.allMovies.filter(
            (movie) => movie.id !== action.payload.movie.id
          ),
        ],
      };

    default:
      return state;
  }
}
