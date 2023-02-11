import { Typography as Text } from '@mui/material';

import typography from '../theme/typography';

export const Typography = function Typography() {
  return (
    <>
      <Text gutterBottom variant="h1" component="h2" color="textPrimary">
        H1. Heading | font size: {typography.h1?.fontSize}
      </Text>
      <Text gutterBottom variant="h2">
        H2. Heading | font size: {typography.h2?.fontSize}
      </Text>
      <Text gutterBottom variant="h3">
        H3. Heading | font size: {typography.h3?.fontSize}
      </Text>
      <Text gutterBottom variant="h4">
        H4. Heading | font size: {typography.h4?.fontSize}
      </Text>
      <Text gutterBottom variant="h5">
        H5. Heading | font size: {typography.h5?.fontSize}
      </Text>
      <Text gutterBottom variant="h6">
        H6. Heading | font size: {typography.h6?.fontSize}
      </Text>
      <Text gutterBottom variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur | font size: {typography.subtitle1?.fontSize}
      </Text>
      <Text gutterBottom variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur | font size: {typography.subtitle2?.fontSize}
      </Text>
      <Text gutterBottom variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam. | font size:{' '}
        {typography.body1?.fontSize}
      </Text>
      <Text gutterBottom variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam. | font size:{' '}
        {typography.body2?.fontSize}
      </Text>
      <Text gutterBottom variant="button" display="block">
        button text | font size: {typography.button?.fontSize}
      </Text>
      <Text gutterBottom variant="caption" display="block">
        caption text | font size: {typography.caption?.fontSize}
      </Text>
      <Text gutterBottom variant="overline" display="block">
        overline text | font size: {typography.overline?.fontSize}
      </Text>
    </>
  );
};
