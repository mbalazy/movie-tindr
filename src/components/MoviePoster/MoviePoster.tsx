import { MoviePosterStyle } from "./MoviePoster.style";

type MoviePosterProps = {
  src: string
}
export const MoviePoster = ({src}: MoviePosterProps) => {
  return (
    <MoviePosterStyle
      src={src}
    />
  );
};
