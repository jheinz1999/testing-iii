// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {

  it('should disable lock button when gate is open', () => {

    const { getByText } = render(<Controls />);

    const lockBtn = getByText(/Lock Gate/i);

    expect(lockBtn.disabled).toBe(true);

  });

});
