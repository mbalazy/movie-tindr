import styled, { css } from "styled-components";

export const MoviePosterWrapper = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1/-1;
  box-shadow: 0px 7px 56px 1px rgba(0, 0, 0, 0.25);

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-column: 1 / span 1;
      grid-row: 1/ span 2;
    }
  `}
`;

export const MoviePosterStyle = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
