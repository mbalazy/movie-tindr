import { createContext, useReducer } from "react";
import { MovieActions } from "./actions";
import { movieReducer } from "./reducer";
import { initialMoviesState, MovieState } from "./state";

export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieActions>;
}>({
  state: initialMoviesState,
  dispatch: () => undefined,
});

type MovieProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [state, dispatch] = useReducer(movieReducer, initialMoviesState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
