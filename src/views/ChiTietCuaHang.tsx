import React, { useRef, useState } from "react";
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const window = Dimensions.get('window');

function ChiTietCuaHang({ navigation, route }): React.JSX.Element {

    const { data } = route.params;
    const handlePress = () => {
        navigation.goBack()
    }
    // const handlePressToHome = () => {
    //     navigation
    // }
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}> */}
                <Image source={{uri: data.ImageSource}} style={styles.imageLocation}></Image>
                {/* </ScrollView> */}
                <TouchableOpacity style={{ position: 'absolute', top: 30, left: 30 }} onPress={handlePress}>
                    <Image source={require('../images/back.png')}
                        style={styles.icon} />
                </TouchableOpacity>
                <View>
                    <View style={styles.sectionText}>
                        <Text style={styles.textName}>{data.Name}</Text>
                        <Text style={styles.textStreet}>{data.Street}</Text>
                        <Text style={styles.text}>Giờ mở cửa: {data.OpenTime}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../images/maps.png')}
                            style={styles.icon} />
                        <Text style={styles.buttonText}>{data.Address}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../images/favorite.png')}
                            style={styles.icon} />
                        <Text style={styles.buttonText}>Thêm vào danh sách yêu thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../images/phone-call.png')}
                            style={styles.icon} />
                        <Text style={styles.buttonText}>Liên hệ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../images/share.png')}
                            style={styles.icon} />
                        <Text style={styles.buttonText}>Chia sẻ với bạn bè</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.orderButton} >
                <Text style={styles.orderButtonText}>Đặt sản phẩm</Text>
                <Text style={styles.orderButtonTextSmall}>Tự đến lấy tại cửa hàng này</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageLocation: {
        width: window.width,
        height: 400,
        borderRadius: 2,
        resizeMode: "stretch",
    },
    textName: {
        fontSize: 15,
        fontWeight: '600',
    },
    textStreet: {
        fontSize: 20,
        color: 'black',
        fontWeight: '700',

    },
    text: {
        fontSize: 17,
        color: 'gray',
    },
    sectionText: {
        justifyContent: 'space-around',
        margin: 10
    },
    buttonContainer: {
        marginTop: 16,
        width: '100%'
    },
    orderButton: {
        backgroundColor: '#ff7f00',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    orderButtonText: {
        fontSize: 16,
        color: '#fff',
    },
    orderButtonTextSmall: {
        fontSize: 12,
        color: '#fff',
    },
    button: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 10
    },
    icon: {
        height: 30,
        width: 30
    }
});

export default ChiTietCuaHang;
