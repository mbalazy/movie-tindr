import styled, { css } from "styled-components";

export const MovieCardWrapper = styled.div`
  width: 80vw;
  max-width: 100rem;
  display: grid;
  grid-template-columns: 3fr 2fr 18rem;
  grid-template-rows: 16rem 20rem 10rem;
  gap: 6rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 14rem 10rem auto 8rem;
      gap: 2.4rem;
    }
  `}
`;
