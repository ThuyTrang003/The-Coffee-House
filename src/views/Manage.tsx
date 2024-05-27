import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GioHang from './GioHang';
import CuaHang from './CuaHang';
import Khac from './Khac';
import DonHang from './DonHang';
import { Image } from 'react-native';
import SanPham from './SanPham';

const Tab = createBottomTabNavigator();

function Manage({ navigation, route }) {
  //   const { user } = route.params;  // Extract user data from route parameters
  //   const goBackToLogin = () => {
  //     navigation.goBack();
  // };
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Trang chủ" component={SanPham} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/home.png')} style={{ width: 30, height: 30 }} resizeMode="stretch"></Image>
                    ), headerShown: false
                }}
                // initialParams={{ goBack: goBackToLogin }}  // Pass user data to SanPham component
                />

                <Tab.Screen name="Giỏ hàng" component={GioHang} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/shopping-cart.png')} style={{ width: 30, height: 30 }} resizeMode="stretch"></Image>
                    ), headerShown: false
                }}
                // initialParams={{ user }}  // Pass user data to GioHang component
                />

                <Tab.Screen name="Cửa hàng" component={CuaHang} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/location.png')} style={{ width: 30, height: 30 }} resizeMode="stretch"></Image>
                    ), headerShown: false
                }}
                // initialParams={{ user }}  // Pass user data to CuaHang component
                />

                <Tab.Screen name="Đơn hàng" component={DonHang} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/clipboard.png')} style={{ width: 30, height: 30 }} resizeMode="stretch"></Image>
                    ), headerShown: false
                }}
                // initialParams={{ user }}  // Pass user data to DonHang component
                />
                
                <Tab.Screen name="Khác" component={Khac} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/menu-bar.png')} style={{ width: 30, height: 30 }} resizeMode="stretch"></Image>
                    ), headerShown: false
                }}
                // initialParams={{ user }}  // Pass user data to Khac component
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Manage;
