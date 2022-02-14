import React from 'react';
import renderer from 'react-test-renderer';

import {LoadingScreen} from '../src/components/loading-screen/LoadingScreen.component';

describe('Components rendering', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoadingScreen title="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
