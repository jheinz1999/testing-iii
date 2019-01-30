// Test away!

import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {

  it('should close gate when button is pressed', () => {

    const { getByText } = render(<Dashboard />);

    const closeBtn = getByText(/Close Gate/i);

    fireEvent.click(closeBtn);

    expect(closeBtn.textContent).toBe(/Open Gate/i);

  });

  it('should lock gate when button is pressed', () => {

    const { getByText } = render(<Dashboard />);

    const closeBtn = getByText(/Close Gate/i);
    const lockBtn = getByText(/Lock Gate/i);

    fireEvent.click(closeBtn);
    fireEvent.click(lockBtn);

    expect(lockBtn.textContent).toBe(/Unlock Gate/i);

  });

});
