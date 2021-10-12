import { MovieCard } from "../MovieCard/MovieCard";
import { MainInnerWrapper, MainWrapper } from "./Main.style";
import { useMovie } from "../../state/useMovie";

export const Main = () => {
  const { currentMovie } = useMovie();

  return (
    <MainWrapper>
      <MainInnerWrapper>
        {currentMovie ? (
          <MovieCard {...currentMovie} />
        ) : (
          <p>There is no more films sugestions</p>
        )}
      </MainInnerWrapper>
    </MainWrapper>
  );
};
