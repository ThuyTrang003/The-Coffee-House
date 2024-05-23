import React, { useRef, useState } from "react";
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const window = Dimensions.get('window');

function ChiTietCuaHang({navigation, route}): React.JSX.Element {

    const {name} = route.params;
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const scrollViewRef = useRef<ScrollView>(null);

    const onScroll = (event: any) => {
        const { y } = event.nativeEvent.contentOffset;
        setButtonPosition({ x: window.width - 30, y: y + 10 });
    };
    const handlePress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                style={{ flex: 1 }}
                onScroll={onScroll}
                scrollEventThrottle={16}>
                <Image source={require('../images/location1.jpg')} style={styles.imageLocation}></Image>
                <View style={styles.sectionText}>
                    <Text style={styles.textName}>{name}</Text>
                    <Text style={styles.textAddress}>HCM DUONG D1</Text>
                    <Text style={styles.textTime}>Giờ mở cửa: 07:00 - 18:00</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Image source={require('../images/reject.png')} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <Button title="Đặt sản phẩm" color='orange' />
            </View>
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
        height: 300,
        borderRadius: 2,
        resizeMode: "stretch"
    },
    textName: {
        fontSize: 13,
        fontWeight: '600',
    },
    textAddress: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
    },
    textTime: {
        fontSize: 17,
        color: 'gray',
    },
    sectionText: {
        justifyContent: 'space-around',
        margin: 10
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10
    },
    button: {
        position: 'absolute',
        width: 20,
        height: 20,
        backgroundColor: 'gray',
        left: window.width - 30,
        top: 10
    }
});

export default ChiTietCuaHang;
