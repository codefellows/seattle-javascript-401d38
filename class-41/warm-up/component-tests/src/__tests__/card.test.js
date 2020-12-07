import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// import Card from '../components/card';

test('Card should display the title, image, and children', () => {
  let testTitle = 'Header text to display';

  render(<Card title="test" />)
})
