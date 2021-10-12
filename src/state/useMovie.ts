import axios from "axios";
import { useContext } from "react";
import { acceptMovie, rejectMovie } from "./actions";
import { MovieContext } from "./context";

const myBackendUrl = "https://mybackendapi.com/";

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useContext must be used within Provider");
  }

  const { dispatch, state } = context;
  const currentMovie = state.allMovies[0];

  const reject = () => {
    axios.put(`${myBackendUrl}/recommendations/${currentMovie.id}/accept`);
    dispatch(rejectMovie(currentMovie));
  };

  const accept = () => {
    axios.put(`${myBackendUrl}/recommendations/${currentMovie.id}/reject`);
    dispatch(acceptMovie(currentMovie));
  };

  return { dispatch, reject, accept, currentMovie };
};
