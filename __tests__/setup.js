import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => { return {BaseButton: () => ''}});

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// As of react-native@0.64.X file has moved
//jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
