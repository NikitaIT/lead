import { render } from '@testing-library/react';

import Tasks from './tasks';

describe('Tasks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tasks />);
    expect(baseElement).toBeTruthy();
  });
});
