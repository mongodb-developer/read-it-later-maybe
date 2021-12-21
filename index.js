import { registerRootComponent } from 'expo';

// added to avoid ugly Warning "BSON: For React Native please polyfill crypto.getRandomValues" 
// See: https://github.com/realm/realm-js/issues/3714
import 'react-native-get-random-values'

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
