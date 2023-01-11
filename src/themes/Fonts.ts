/** @format */

import { FontSize, FontWeight } from '~/types/themes';

const family = {
  base: 'Roboto',
};

const size: FontSize = {
  larger: 24,
  large: 18,
  default: 16,
  small: 14,
  smaller: 12,
  maxFontSizeMultiplier: 1.7,
};

const weight: FontWeight = {
  bolder: '700',
  bold: '600',
  semiBold: '500',
  regular: '400',
  light: '300',
};

export default {
  family,
  size,
  weight,
};
