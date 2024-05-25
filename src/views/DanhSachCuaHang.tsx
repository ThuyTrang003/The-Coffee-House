import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StoreCard from "../component/StoreCard";

function DSCuaHang({ navigation }): React.JSX.Element {
    const [value, setFindText] = useState("");

    const handlePress = () => {
        navigation.navigate('ChiTietCuaHang', { name: 'THE COFFEE HOUSE' });
    }

    // Danh sách các cửa hàng
    const stores = [
        { id: '1', name: 'Store 1', address: '123 ABC Street', distance: '1.2 km' },
        { id: '2', name: 'Store 2', address: '456 XYZ Street', distance: '0.8 km' },
        { id: '3', name: 'Store 3', address: '789 DEF Street', distance: '2.5 km' },
        { id: '4', name: 'Store 4', address: '321 GHI Street', distance: '3.3 km' },
        { id: '5', name: 'Store 5', address: '654 JKL Street', distance: '0.5 km' },
        { id: '6', name: 'Store 6', address: '987 MNO Street', distance: '2.9 km' },
        { id: '7', name: 'Store 7', address: '654 PQR Street', distance: '1.8 km' },
    ];

    // Hàm render cho mỗi mục cửa hàng
    const renderStore = ({ item }) => (
        <TouchableOpacity onPress={handlePress}>
            <StoreCard store={item}></StoreCard>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    <Text style={styles.textTitleHeader}>Cửa hàng</Text>
                    <View style={styles.spaceIcon}>
                        <TouchableOpacity style={styles.boxVoucher}>
                            <Image source={require('../images/voucher.png')} style={styles.imageStyle}></Image>
                            <Text style={styles.textInBoxVoucher}>14</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxNotify}>
                            <Image source={require('../images/notification.png')} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.sectionFind}>
                    <View style={styles.boxFind}>
                        <Image source={require('../images/find.png')} style={styles.imageStyle}></Image>
                        <TextInput
                            style={styles.input}
                            placeholder="Tìm kiếm"
                            placeholderTextColor={"black"}
                            value={value}
                            onChangeText={(text) => setFindText(text)}
                            clearButtonMode="always"
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity style={styles.boxMap}>
                        <Image source={require('../images/place.png')} style={styles.imageStyle}></Image>
                        <Text style={styles.textInBoxVoucher}>Bản đồ</Text>
                    </TouchableOpacity>
                </View>
            </View >
            <View style={styles.footer}>
                <Text style={styles.textTitleFooter}>Các cửa hàng khác</Text>
                <FlatList
                    data={stores}
                    renderItem={renderStore}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitleHeader: {
        fontSize: 30,
        color: 'black',
        fontWeight: '500',
        margin: 10
    },
    textTitleFooter: {
        fontSize: 25,
        color: 'black',
        fontWeight: '500',
        marginVertical: 10
    },
    header: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 10,
    },
    innerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        flex: 1,
        backgroundColor: '#F7F3F3',
        padding: 10,
    },
    spaceIcon: {
        flexDirection: 'row',
        marginLeft: 10
    },
    boxVoucher: {
        width: 70,
        height: 40,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        margin: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    textInBoxVoucher: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },
    boxNotify: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 5
    },
    boxFind: {
        flex: 1,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        elevation: 5
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 18
    },
    imageStyle: {
        width: 30,
        height: 30,
        resizeMode: "stretch",
    },
    boxMap: {
        width: 100,
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    sectionFind: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});

export default DSCuaHang;
