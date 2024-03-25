/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Manage from './src/views/Manage';
AppRegistry.registerComponent(appName, () => Manage);
