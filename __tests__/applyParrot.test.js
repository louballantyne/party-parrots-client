import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ApplyParrot } from '../src/components/applyParrot';
import 'react-native-gesture-handler';
import { shallow, mount, render } from 'enzyme';

//import { MockedNavigator } from '../src/components/mockedNav';
jest.mock('@react-navigation/core', () => ({
  navigate: jest.fn(),
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
  }),
}))

describe('ApplyParrot', () => {
  it("renders", () => {
      shallow(<ApplyParrot />)
  });
});
