import { useContext } from "react";
import { acceptMovie, rejectMovie } from "./actions";
import { MovieContext } from "./context";

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useContext must be used within Provider");
  }

  const { dispatch, state } = context;
  const currentMovie = state.allMovies[0];

  const reject = () => dispatch(rejectMovie(currentMovie));
  const accept = () => dispatch(acceptMovie(currentMovie));

  return { dispatch, reject, accept, currentMovie };
};
