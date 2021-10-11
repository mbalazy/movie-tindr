import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
  margin: 3rem;
  min-height: calc(90vh);
  overflow: hidden;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      margin: 2rem 1.6rem;
    }
  `}
`;

export const MainStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 20px;
  right: 20px;
  padding: 3rem;
  border-radius: 6px;
  min-height: calc(100vh - 14rem);
  display: grid;
  place-items: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      padding: 2.6rem 1.6rem;
    }
  `}
`;
