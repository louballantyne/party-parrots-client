import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ParrotPage } from '../src/components/parrotPage';
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

describe('ParrotPage', () => {
  it("renders", () => {
      shallow(<ParrotPage />)
  });
});
