import {ThemeProvider} from "styled-components";
import {theme} from "../src/styles/theme";
import {GlobalStyles} from "../src/styles/global-styles";
import {BlogThemeProvider} from "../src/contexts/BlogThemeContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default : 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white

      },
      {
        name: 'dark',
        value: theme.colors.primary
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <BlogThemeProvider>
      <GlobalStyles />
      <Story />
    </BlogThemeProvider>
  )
];
