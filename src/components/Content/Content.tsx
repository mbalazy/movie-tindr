import { Details } from "../Details/Details";
import { MoviePoster } from "../MoviePoster/Image";
import { ContentStyle } from "./Content.style";

export const Content = () => {
  return (
    <ContentStyle>
      <MoviePoster />
      <Details />
    </ContentStyle>
  );
};
