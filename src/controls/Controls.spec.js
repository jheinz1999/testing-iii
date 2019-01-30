// Test away!

import React from 'react';
import { render } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {

  it('should disable lock button when gate is open', () => {

    const { getByText } = render(<Controls />);

    const lockBtn = getByText(/Lock Gate/i);

    expect(lockBtn.disabled).toBe(true);

  });

  it('should disable open button when gate is locked', () => {

    const { getByText } = render(<Controls locked={true} />);

    const openBtn = getByText(/Open Gate/i);

    expect(openBtn.disabled).toBe(true);

  });

});
