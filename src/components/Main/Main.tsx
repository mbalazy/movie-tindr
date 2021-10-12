import { MovieCart } from "../MovieCart/MovieCart";
import { MainInnerWrapper, MainWrapper } from "./Main.style";
import SwappableCard from "react-tinder-card";
import { useMovie } from "../../state/useMovie";
import { acceptMovie, rejectMovie } from "../../state/actions";

type Directions = "left" | "right" | "up" | "down";

export const Main = () => {
  const { state, dispatch } = useMovie();

  let moviesInRightOrder = state.allMovies.slice().reverse();
  let currentMovie = state.allMovies[0];

  const reject = () => dispatch(rejectMovie(currentMovie));
  const accept = () => dispatch(acceptMovie(currentMovie));

  const onSwipe = (direction: Directions) => {
    switch (direction) {
      case "left":
        return reject();
      case "up":
        return accept();
      case "down":
        return reject();
      default:
        return;
    }
  };

  return (
    <MainWrapper>
      {moviesInRightOrder.map((movie) => {
        return (
          <SwappableCard
            key={movie.id}
            onSwipe={onSwipe}
            preventSwipe={["right"]}
          >
            <MainInnerWrapper>
              <MovieCart {...movie} />
            </MainInnerWrapper>
          </SwappableCard>
        );
      })}
    </MainWrapper>
  );
};
