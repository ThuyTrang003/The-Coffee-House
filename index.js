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
import CuaHang from './src/views/CuaHang';
import PersonalInfor from './src/views/PersonalInfor';
import GioHang from './src/views/GioHang';
import NavigatorLogin from './src/views/NavigatorLogin';
import favourite from './src/views/favourite';
import thongTinCaNhan from './src/views/thongTinCaNhan';
import {itemCart} from '/src/component/itemCart';
AppRegistry.registerComponent(appName, () => GioHang);


