import styled from 'styled-components'

export const FooterStyle = styled.footer`
  height: ${({theme}) => theme.dimensions.footerHeight};
  background-color: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  display: grid;
  place-content: center;
`
