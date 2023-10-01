import type { Preview } from '@storybook/react';
import '../src/freya-ui.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'freya-dark',
      values: [
        {
          name: 'freya-dark',
          value: '#2B2C3B'
        },
        {
          name: 'freya-light',
          value: '#FFFFFF'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
