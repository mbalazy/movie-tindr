import styled, { css } from "styled-components";

export const MovieTitle = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  place-self: center start;
  font-size: ${({ theme }) => theme.fontSize.xl};

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  `}
`;
export const MovieRating = styled.div`
  grid-column: 3 / span 1;
  place-self: center start;
  font-size: ${({ theme }) => theme.fontSize.xl};

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      font-size: ${({ theme }) => theme.fontSize.l};
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
    }
  `}
`;
export const MovieSummary = styled.div`
  grid-column: 2 / -1;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-column: 1 / -1;
      grid-row: 3 / span 1;
      width: 97%;
    }
  `}
`;
