import type { Preview } from "@storybook/react";
import { themes } from "storybook/internal/theming";

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    backgrounds:{
      default:'dark'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs:{
      theme:themes.dark
    }
  },
};

export default preview;
