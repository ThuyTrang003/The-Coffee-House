import { createStackNavigator } from "@react-navigation/stack";
import DanhSachCuaHang from './DanhSachCuaHang';
import ChiTietCuaHang from './ChiTietCuaHang';
const Stack = createStackNavigator();
function CuaHang(): React.JSX.Element {
    return (
        <Stack.Navigator initialRouteName="DanhSachCuaHang" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DanhSachCuaHang"
                component={DanhSachCuaHang} />
            <Stack.Screen name="ChiTietCuaHang"
                component={ChiTietCuaHang}
            />
        </Stack.Navigator>
    );
}

export default CuaHang;
