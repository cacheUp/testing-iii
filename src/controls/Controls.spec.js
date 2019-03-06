// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

afterEach(cleanup);

describe('The Controls Component', () => {
    test('renders the Control component', () => {
        render(<Controls />)
    })

    test('has toggle buttons', () => {
        const { getByText } = render(<Controls closed={false} locked={true} />);
        getByText(/lock gate/i);
        getByText(/close gate/i);
    })
    
    test('cant disable when open and unlocked', () => {
        const { getByText } = render(<Controls closed={false} locked={false} />);
        const toggleLockButton = getByText(/lock gate/i);
        expect(toggleLockButton).toHaveAttribute('disabled', '');
    })

    test('cant close when already closed', () => {
        const { getByText } = render(<Controls closed={true} />);
        getByText(/open gate/i);
    })
});