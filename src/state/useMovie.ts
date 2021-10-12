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

  const reject = async () => {
    dispatch(rejectMovie(currentMovie));
    await axios.put(
      `${myBackendUrl}/recommendations/${currentMovie.id}/accept`
    );
  };

  const accept = async () => {
    dispatch(acceptMovie(currentMovie));
    await axios.put(
      `${myBackendUrl}/recommendations/${currentMovie.id}/reject`
    );
  };

  return { dispatch, reject, accept, currentMovie };
};
