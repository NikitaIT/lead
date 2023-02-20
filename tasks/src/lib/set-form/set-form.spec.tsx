import { render } from '@testing-library/react';

import SetForm from './set-form';

describe.skip('SetForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SetForm />);
    expect(baseElement).toBeTruthy();
  });
});
