import { withLinks } from '@storybook/addon-links';

import button from './button.html';
import './button.scss';

export default {
  title: 'Button',
  decorators: [withLinks],
};

export const Button = () => button;
