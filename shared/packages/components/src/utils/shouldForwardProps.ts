export const shouldForwardProp = (prop: PropertyKey) =>
  prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';

export const rootShouldForwardProp = (prop: PropertyKey) =>
  shouldForwardProp(prop) && prop !== 'classes';

export const slotShouldForwardProp = shouldForwardProp;
