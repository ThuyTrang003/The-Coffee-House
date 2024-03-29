/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Manage from './src/views/Manage';
import Login from './src/views/Login';
import SignUp from './src/views/SignUp';
import OTPVerify from './src/views/OTPVerify';
AppRegistry.registerComponent(appName, () => Manage);
