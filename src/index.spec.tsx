import { render } from '@testing-library/react';

// import './main';

describe('jest', () => {
  it('works', () => {
    //
  });
});
describe.skip('Root', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome lead/gi)).toBeTruthy();
  });
});
