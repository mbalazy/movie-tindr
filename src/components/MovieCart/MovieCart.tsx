import { Buttons } from "../Buttons/Buttons";
import { Details } from "../Details/Details";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { MovieCartWrapper } from "./MovieCart.style";

type ContentProps = {
  imageUrl: string;
  title: string;
  rating: string;
  summary: string;
};

export const MovieCart = ({ title, rating, summary, imageUrl }: ContentProps) => {
  return (
    <MovieCartWrapper >
      <MoviePoster src={imageUrl} />
      <Details title={title} rating={rating} summary={summary} />
      <Buttons />
    </MovieCartWrapper>
  );
};

