// REMOVE ONCE: https://github.com/storybookjs/storybook/issues/13322 is closed
// FIXME [https://github.com/storybookjs/storybook/issues/13322]: REMOVE DEPENDENCY on prettier directly once storybook issue is fixed
export function capitalize<T extends string>(text: T): `${Capitalize<T>}` {
  return (text.charAt(0).toUpperCase() + text.slice(1)) as `${Capitalize<T>}`;
}
export default capitalize;
