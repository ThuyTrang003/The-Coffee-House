import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DanhSachCuaHang from './DanhSachCuaHang';
import ChiTietCuaHang from './ChiTietCuaHang';
import { NavigationContainer } from "@react-navigation/native";

const StoreStack = createStackNavigator();

function CuaHang(): React.JSX.Element {
    return (
        <NavigationContainer independent={true}>
            <StoreStack.Navigator initialRouteName="DanhSachCuaHang" screenOptions={{ headerShown: false }}>
                <StoreStack.Screen name="DanhSachCuaHang"
                    component={DanhSachCuaHang} />
                <StoreStack.Screen name="ChiTietCuaHang"
                    component={ChiTietCuaHang} />
            </StoreStack.Navigator>
        </NavigationContainer>
    );
}

export default CuaHang;
