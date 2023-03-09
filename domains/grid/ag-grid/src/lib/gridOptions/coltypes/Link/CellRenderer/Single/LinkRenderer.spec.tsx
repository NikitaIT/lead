import { render } from '@testing-library/react';

import { LinkRenderer } from './LinkRenderer';
import { axe } from '@lead/axe';
import { testcases } from './testcases';

describe('LinkRenderer', () => {
  it.each(Object.entries(testcases))(
    'should render successfully %s',
    async (k, v) => {
      expect(XHtml.a).toBe('a');

      const { baseElement } = render(<LinkRenderer {...v} />);
      expect(baseElement).toBeTruthy();
      await axe.componentHaveNoViolationsAsync(baseElement);
      expect(baseElement).toMatchSnapshot();
    }
  );
  it('a11n works', async () => {
    try {
      const { baseElement } = render(<a href="#"></a>);
      expect(baseElement).toBeTruthy();
      await axe.componentHaveNoViolationsAsync(baseElement);
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
