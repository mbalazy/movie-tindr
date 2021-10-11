import { MovieSummary, MovieRating, MovieTitle } from "./Details.style";

type DetailsProps = {
  title: string;
  rating: string;
  summary: string;
};

export const Details = ({ title, rating, summary }: DetailsProps) => {
  return (
    <>
      <MovieTitle>{title}</MovieTitle>
      <MovieRating>{rating}/10</MovieRating>
      <MovieSummary>{summary}</MovieSummary>
    </>
  );
};
