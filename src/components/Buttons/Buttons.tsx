import { rejectMovie, acceptMovie } from "../../state/actions";
import { useMovie } from "../../state/useMovie";
import { AcceptButton, RejectButton } from "./Buttons.style";

export const Buttons = () => {
  const { state, dispatch } = useMovie();
  const currentMovie = state.allMovies[0];

  const reject = () => dispatch(rejectMovie(currentMovie));
  const accept = () => dispatch(acceptMovie(currentMovie));

  return (
    <>
      <RejectButton onTouchEnd={() => reject()}>Reject</RejectButton>
      <AcceptButton onTouchEnd={() => accept()}>Accept</AcceptButton>
    </>
  );
};
