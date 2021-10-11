import { MovieCart } from "../MovieCart/MovieCart";
import { MainInnerWrapper, MainWrapper } from "./Main.style";
import SwappableCard from "react-tinder-card";
import { useMovie } from "../../state/useMovie";

const onSwipe = (direction: string) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier: string) => {
  console.log(myIdentifier + " left the screen");
};

export const Main = () => {
  const { state } = useMovie();
  const moviesInRightOrder = state.allMovies.slice().reverse();

  return (
    <MainWrapper>
      {moviesInRightOrder.map((movie) => {
        return (
          <SwappableCard
            key={movie.id}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen(movie.title)}
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
