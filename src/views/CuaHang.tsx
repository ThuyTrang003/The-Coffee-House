import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DanhSachCuaHang from './DanhSachCuaHang';
import ChiTietCuaHang from './ChiTietCuaHang';
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./MapScreen";
import GioHang from "./GioHang";

const StoreStack = createStackNavigator();

function CuaHang({route}): React.JSX.Element {
    const {user} = route.params;
    return (
        <NavigationContainer independent={true}>
            <StoreStack.Navigator initialRouteName="DanhSachCuaHang" screenOptions={{ headerShown: false }}>
                <StoreStack.Screen name="DanhSachCuaHang" initialParams={{ user }}
                    component={DanhSachCuaHang} />
                <StoreStack.Screen name="ChiTietCuaHang" 
                    component={ChiTietCuaHang} />
                    {/* <StoreStack.Screen name="MapScreen"
                    component={MapScreen} /> */}
                    <StoreStack.Screen name="GioHang"
                    component={GioHang} />
            </StoreStack.Navigator>
        </NavigationContainer>
    );
}

export default CuaHang;
