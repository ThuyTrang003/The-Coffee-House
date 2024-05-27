import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from './Login';
import SignUp from './SignUp';
import TrangChu from "./TrangChu";
import Manage from "./Manage";
import { AuthProvider } from "../context/AuthContext";

const LoginStack = createStackNavigator();

function NavigatorLogin(): React.JSX.Element {
    return (
        <NavigationContainer independent={true}>
            <LoginStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <LoginStack.Screen name="Login" component={Login} />
                <LoginStack.Screen name="SignUp" component={SignUp} />
                <LoginStack.Screen name="Manage" component={Manage} />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}

export default NavigatorLogin;
