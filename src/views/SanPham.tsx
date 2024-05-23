import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TrangChu from "./TrangChu";
import ChiTietSanPham from "./ChiTietSanPham";

const ProductStack = createStackNavigator();

function SanPham(): React.JSX.Element {
    return (
        <NavigationContainer independent={true}>
            <ProductStack.Navigator initialRouteName="TrangChu" screenOptions={{ headerShown: false }}>
                <ProductStack.Screen name="TrangChu"
                    component={TrangChu} />
                <ProductStack.Screen name="ChiTietSanPham"
                    component={ChiTietSanPham} />
            </ProductStack.Navigator>
        </NavigationContainer>
    );
}

export default SanPham;
