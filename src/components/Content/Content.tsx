import { Details } from "../Details/Details";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { ContentStyle } from "./Content.style";

export const Content = () => {
  return (
    <ContentStyle>
      <MoviePoster />
      <Details />
    </ContentStyle>
  );
};
