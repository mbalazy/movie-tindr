import { IMovie } from "../../state/state";
import { Buttons } from "../Buttons/Buttons";
import { Details } from "../Details/Details";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { MovieCardWrapper } from "./MovieCard.style";

export const MovieCard = ({ title, rating, summary, imageUrl }: IMovie) => {
  return (
    <MovieCardWrapper >
      <MoviePoster src={imageUrl} />
      <Details title={title} rating={rating} summary={summary} />
      <Buttons />
    </MovieCardWrapper>
  );
};

