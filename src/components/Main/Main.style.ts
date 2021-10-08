import styled from "styled-components";

export const MainWrapper = styled.main`
  margin: 3rem;
`;

export const MainStyle = styled.div`
  background-color: ${({theme}) => theme.colors.white};
  padding: 3rem;
  border-radius: 6px;
  min-height: calc(100vh - 14rem);
  display: grid;
  place-content: center;
`;
export const Content = styled.div`
  max-width: 100rem;
  padding: 15rem 10rem;
`
