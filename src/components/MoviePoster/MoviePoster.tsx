import { MoviePosterStyle, MoviePosterWrapper } from "./MoviePoster.style";

type MoviePosterProps = {
  src: string;
};
export const MoviePoster = ({ src }: MoviePosterProps) => {
  return (
    <MoviePosterWrapper>
      <MoviePosterStyle src={src} />
    </MoviePosterWrapper>
  );
};
