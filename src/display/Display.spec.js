// Test away!

import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

describe('<Display />', () => {

  it('should display closed if door is closed', () => {

    const { getByText } = render(<Display closed={true}/>);

    const status = getByText(/Closed/i);

    expect(status).not.toBe(null);

  });

  it('should display open if door is open', () => {

    const { getByText } = render(<Display closed={false}/>);

    const status = getByText(/Open/i);

    expect(status).not.toBe(null);

  });

  it('should display locked if door is locked', () => {

    const { getByText } = render(<Display locked={true}/>);

    const status = getByText(/Locked/i);

    expect(status).not.toBe(null);

  });

  it('should display unlocked if door is unlocked', () => {

    const { getByText } = render(<Display locked={false}/>);

    const status = getByText(/Unlocked/i);

    expect(status).not.toBe(null);

  });

});
