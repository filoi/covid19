import { addons } from '@storybook/addons';
import theme from './dihs2-theme';
import centered from '@storybook/addon-centered';

addons.setConfig({
  theme,
  decorators: ['centered']
});