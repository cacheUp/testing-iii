// Test away
import React from 'react';
import { render } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('Dashboard renders', () => {
    test('shows dashboard', () => {
        render(<Dashboard />)
    })
})