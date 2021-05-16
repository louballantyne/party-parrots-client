import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { SignIn } from '../src/components/signIn';
import 'react-native-gesture-handler';
import { shallow, mount, render } from 'enzyme';

import { MockedNavigator } from '../src/components/mockedNav';

describe('SignIn', () => {
  it("renders", () => {
      render(<SignIn />)
  });
});
