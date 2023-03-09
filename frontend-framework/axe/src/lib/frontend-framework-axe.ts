import { axe as _axe } from 'jest-axe';
import 'jest-axe/extend-expect';
// import { expect } from '@jest/globals';

export const axe = {
  async componentHaveNoViolationsAsync(html: string | HTMLElement) {
    expect(
      await _axe(html, {
        rules: {
          region: { enabled: false },
        },
      })
    ).toHaveNoViolations();
  },
  async pageHaveNoViolationsAsync(html: string | HTMLElement) {
    expect(await _axe(html)).toHaveNoViolations();
  },
};
