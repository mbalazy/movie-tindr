import { createContext, useReducer } from "react";
import { MoviesActions } from "./actions";
import { movieReducer } from "./reducer";
import { initialMoviesState, MoviesState } from "./state";

export const MovieContext = createContext<{
  state: MoviesState;
  dispatch: React.Dispatch<MoviesActions>;
}>({
  state: initialMoviesState,
  dispatch: () => undefined,
});

type MenuProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export const MoviesProvider = ({ children }: MenuProviderProps) => {
  const [state, dispatch] = useReducer(movieReducer, initialMoviesState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
