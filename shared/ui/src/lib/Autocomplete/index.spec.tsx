import { render } from '@testing-library/react';

import Banner from '.';

describe('Banner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Banner text="lol" />);
    expect(baseElement).toBeTruthy();
  });
});
