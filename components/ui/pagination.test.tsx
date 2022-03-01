import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from './pagination';

describe('components/Pagination', () => {
  test('renders correctly', () => {
    render(<Pagination current={1} total={5} />);

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
