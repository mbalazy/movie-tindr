import styled from "styled-components";

export const MovieTitle = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  place-self: center start;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const MovieRating = styled.div`
  grid-column: 3 / span 1;
  place-self: center start;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
export const MovieSummary = styled.div`
  grid-column: 2 / -1;
`;
