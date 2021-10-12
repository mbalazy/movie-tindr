import { Buttons } from "../Buttons/Buttons";
import { Details } from "../Details/Details";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { MovieCardWrapper } from "./MovieCard.style";

type ContentProps = {
  imageUrl: string;
  title: string;
  rating: string;
  summary: string;
};

export const MovieCard = ({ title, rating, summary, imageUrl }: ContentProps) => {
  return (
    <MovieCardWrapper >
      <MoviePoster src={imageUrl} />
      <Details title={title} rating={rating} summary={summary} />
      <Buttons />
    </MovieCardWrapper>
  );
};

