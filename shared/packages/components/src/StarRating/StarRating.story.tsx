import { StarRating } from '.';
// import mdx from './StarRating.mdx';

export default {
  title: 'Components/Star Rating',
  parameters: {
    docs: {
      // page: mdx,
    },
    options: {
      showPanel: true,
    },
  },
  component: StarRating,
};

export const BasicUsage = function BasicUsage() {
  return <StarRating value={2} max={5} />;
};

export const PreciseRating = function PreciseRating() {
  return <StarRating precise value={3.69} max={5} />;
};

export const WithoutTextRating = function WithoutTextRating() {
  return <StarRating value={3} max={5} showTextRating={false} />;
};

export const WithCustomFontSize = function WithCustomFontSize() {
  return <StarRating value={3.69} max={5} sx={{ fontSize: '3em' }} />;
};
