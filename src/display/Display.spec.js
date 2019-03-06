// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Display from './Display';

afterEach(cleanup);

describe('Display renders', () => {
    test('Display shows', () => {
        render(<Display />)
    })

    test('shows gate closed and locked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText(/closed/i);
        getByText(/locked/i); 
    })

    test('shows gate open and unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText(/open/i);
        getByText(/unlocked/i);
    })

    test('green when open or unlocked', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);
        const unlockedGate = getByText(/unlocked/i);
        const openGate = getByText(/open/i);
        expect(unlockedGate).toHaveClass('green-led');
        expect(openGate).toHaveClass('green-led');
    })

    test('red when closed or locked', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);
        const lockedGate = getByText(/locked/i);
        const closedGate = getByText(/closed/i);
        expect(lockedGate).toHaveClass('red-led');
        expect(closedGate).toHaveClass('red-led');
    })
})