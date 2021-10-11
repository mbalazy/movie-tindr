import { DUMMY_DATA } from "../../DATA";
import { Buttons } from "../Buttons/Buttons";
import { Details } from "../Details/Details";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { ContentWrapper } from "./Content.style";

export const Content = () => {
  const movie = DUMMY_DATA[0];
  const { title, rating, summary, imageUrl} = movie;

  return (
    <ContentWrapper>
      <MoviePoster src={imageUrl} />
      <Details title={title} rating={rating} summary={summary} />
      <Buttons />
    </ContentWrapper>
  );
};
