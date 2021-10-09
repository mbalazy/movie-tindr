import { DUMMY_DATA } from "../../DATA";
import { Details } from "../Details/Details";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { ContentStyle } from "./Content.style";

export const Content = () => {
  const movie = DUMMY_DATA[0];
  const src = movie.imageUrl;

  return (
    <ContentStyle>
      <MoviePoster src={src} />
      <Details />
    </ContentStyle>
  );
};
