import { mount, shallow } from 'enzyme';
import * as React from 'react';

import ProgressBar from '../../../../modules/common/components/ProgressBar';

describe('ProgressBar component', () => {
  const defaultProps = {
    percentage: 50
  };

  test('renders ProgressBar successfully', () => {
    shallow(<ProgressBar {...defaultProps} />);
  });

  test('renders ProgressBar successfully with default value', () => {
    const wrapper = mount(<ProgressBar {...defaultProps} />);
    const props = wrapper.props();

    expect(props).toMatchObject(defaultProps);
  });
});
