/* eslint-disable import/no-extraneous-dependencies */
import flat from 'flat';
import { kebabCase } from 'lodash';

const accentColorRegex = /(-a)-(\d+)$/;
function createValidCssVariable(name: string) {
  return kebabCase(name).replace(accentColorRegex, '$1$2');
}

export default function generateCssVariables<T extends Record<string, unknown>>(
  input: T
) {
  const flattenResult = flat<T, T>(input);

  return Object.keys(flattenResult).reduce((acc, current) => {
    if (typeof flattenResult[current] === 'function') {
      return acc;
    }

    return {
      ...acc,
      [`--${createValidCssVariable(current)}`]: flattenResult[current],
    };
  }, {});
}
