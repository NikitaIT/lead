import { render } from '@testing-library/react';

import App from './app';

describe('jest', () => {
  it('works', () => {
    //
  });
});
describe.skip('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome lead/gi)).toBeTruthy();
  });
});
