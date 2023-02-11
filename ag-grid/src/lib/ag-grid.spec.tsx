import { render } from '@testing-library/react';

import AgGrid from './ag-grid';

describe('AgGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AgGrid />);
    expect(baseElement).toBeTruthy();
  });
});
