export const theme = {
  colors: {
    primary: '#000000',
    secondary: '#dc143c',
    darkText: '#333333',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkGray: '#AAAAAA',
  },
  fonts: {
    family: {
      default: "'Open Sans', sans-serif",
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      big: '3.2rem',
      xbig: '4.0rem',
      xxbig: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 360px)',
  },
  spacing: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    big: '3.2rem',
    xbig: '4.0rem',
    xxbig: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  sizes: {
    max: '96rem',
    content: '80rem',
  },
} as const;
