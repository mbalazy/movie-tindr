import styled, { css } from "styled-components";

const ButtonsBaseStyle = styled.button`
  height: 5rem;
  width: 18rem;
  box-shadow: 0px 6px 21px 1px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  border: none;
  cursor: pointer;

  transition: all 0.1s;
  backface-visibility: hidden;

  &:hover {
    transform: scale(1.01) translateY(-2px);
    box-shadow: 0px 12px 21px 1px rgba(0, 0, 0, 0.14);
  }
  &:active {
    transform: scale(1) translateY(0px);
    box-shadow: 0px 6px 21px 1px rgba(0, 0, 0, 0.14);
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      width: 80%;
      place-self: center;
    }
  `}
`;

export const RejectButton = styled(ButtonsBaseStyle)`
  background: rgba(254, 112, 112, 0.71);
`;
export const AcceptButton = styled(ButtonsBaseStyle)`
  background: rgba(32, 162, 0, 0.63);
`;
