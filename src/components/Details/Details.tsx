import { MovieSummary, MovieRating, MovieTitle } from "./Details.style";

type DetailsProps = {
  title: string;
  rating: string;
  summary: string;
};

export const Details = ({ title, rating, summary }: DetailsProps) => {
  return (
    <>
      <MovieTitle><h3>{title}</h3></MovieTitle>
      <MovieRating><p>{rating}/10</p></MovieRating>
      <MovieSummary>
        <p>{summary}</p>
      </MovieSummary>
    </>
  );
};
