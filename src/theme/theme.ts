const mainTheme = {
  colors: {
    white: '#FFF',
    black: 'rgba(0, 0, 0, 0.9)',
  },

  fontSize: {
    s: '1.5rem',
    m: '1.6rem',
    l: '2rem',
    xl: '2.4rem',
  },

  dimensions: {
    headerHeight: '8rem',
    footerHeight: '5rem',
  },

  up: (breakpoint: string, vertical = false) =>
    `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 1px))`,
  down: (breakpoint: string, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,

  breakpoints: {
    l: '1024px',
    m: '767px',
    s: '480px',
  },

} as const

type MainThemeType = typeof mainTheme

declare module "styled-components" {
  export interface DefaultTheme extends MainThemeType {}
}

export default mainTheme
