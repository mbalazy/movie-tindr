import { MovieCart } from "../MovieCart/MovieCart";
import { MainStyle, MainWrapper } from "./Main.style";
import SwappableCard from "react-tinder-card";
import { DUMMY_DATA } from "../../DATA";

const onSwipe = (direction: string) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier: string) => {
  console.log(myIdentifier + " left the screen");
};

export const Main = () => {
  const movies = DUMMY_DATA;

  return (
    <MainWrapper className='cardContainer'>
      {movies.map((movie) => {
        return (
          <SwappableCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen(movie.title)}
            preventSwipe={["right"]}
            flickOnSwipe={true}
          >
            <MainStyle>
              <MovieCart {...movie} />
            </MainStyle>
          </SwappableCard>
        );
      })}
    </MainWrapper>
  );
};
