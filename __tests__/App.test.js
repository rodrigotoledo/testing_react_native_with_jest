/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// Note: lets test the renderer of section with some text, I like to use test

it('should render correctly text in Section', () => {
  const {getByText} = render(<App />);

  // check if title is present
  const titleElement = getByText(/Read the docs to discover what/i);
  expect(titleElement).toBeTruthy();
});
