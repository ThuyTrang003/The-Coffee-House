import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrangChu from './TrangChu';
import DatHang from './DatHang';
import CuaHang from './CuaHang';
import Khac from './Khac';
import UuDai from './UuDai';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function Manage() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Trang chủ" component={TrangChu} options={{
          tabBarIcon: () => (
          <Image source={require('../images/home.png')} style={{width: 30, height: 30}} resizeMode="stretch"></Image>
        ), headerShown: false}}/>
        <Tab.Screen name="Giỏ hàng" component={DatHang} options={{
          tabBarIcon: () => (
          <Image source={require('../images/shopping-cart.png')} style={{width: 30, height: 30}} resizeMode="stretch"></Image>
        ), headerShown: false}}/>
        <Tab.Screen name="Cửa hàng" component={CuaHang} options={{
          tabBarIcon: () => (
          <Image source={require('../images/location.png')} style={{width: 30, height: 30}} resizeMode="stretch"></Image>
        ), headerShown: false}}/>
        <Tab.Screen name="Ưu đãi" component={UuDai} options={{
          tabBarIcon: () => (
          <Image source={require('../images/coupon.png')} style={{width: 30, height: 30}} resizeMode="stretch"></Image>
        ), headerShown: false}}/>
        <Tab.Screen name="Khác" component={Khac} options={{
          tabBarIcon: () => (
          <Image source={require('../images/menu-bar.png')} style={{width: 30, height: 30}} resizeMode="stretch"></Image>
        ), headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Manage;
