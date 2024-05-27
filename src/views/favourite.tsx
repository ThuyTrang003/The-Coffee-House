import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';

const screenWidth = Dimensions.get('window').width;

function heartButton(tick: boolean): React.JSX.Element {
    if (tick == false)
        return (
            <Image source={require('../images/heart.png')}
                style={{ height: 25, width: 25, marginRight: 10, marginLeft: 10 }} />
        )
    else
        return (
            <Image source={require('../images/heartRed.png')}
                style={{ height: 25, width: 25, marginRight: 10, marginLeft: 10 }} />
        )
}

function GioHang(): React.JSX.Element {
    const [tick, setTick] = useState(true);

    //hàm chính
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Image source={require('../images/left-arrow.png')}
                    style={{ height: 15, width: 15 }} />
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginLeft: (screenWidth - 230) / 2 }]}>
                    Sản phẩm yêu thích</Text>
            </View>
            <GestureHandlerRootView style={{ flex: 8 }}>
                <ScrollView>

                    <View style={styles.titleComponent}>
                        <View style={[styles.item]}>
                            <Image source={require('../images/coffee.png')} //chỗ này để ảnh sp
                                style={{ height: 60, width: 60, marginRight: 10 }} />
                            <View>
                                <View style={[styles.categoryInfor]}>
                                    <Text style={[styles.fontWeight, { fontSize: 16, color: 'black' }]}>
                                        Olong Tứ Quý Vải Vảiiiiii Vải</Text>
                                </View>
                                <Text style={[styles.fontWeightLight, { fontSize: 15, color: 'black', marginBottom: 10 }]}>
                                    85.000đ</Text>

                            </View>
                            <TouchableOpacity
                                onPress={() => { setTick(!tick) }}>
                                {heartButton(tick)}
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                </ScrollView>
            </GestureHandlerRootView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    fontWeightLight: {
        fontFamily: 'Roboto-Light',
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    titleComponent: {
        paddingTop: 10,
        backgroundColor: 'white',
    },
    component: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    button1: {
        backgroundColor: '#DBAFA0',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
    },

    categoryInfor: {
        width: (screenWidth) / 7 * 4,
        marginBottom: 10,
        //backgroundColor: 'gray',
    },
    totalPay: {
        flex: 1,
        justifyContent: 'flex-end',
        borderColor: 'lightgray',
        borderTopWidth: 2,
        paddingTop: 15,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F374B',
        borderRadius: 8,
        width: '100%',
        height: 40,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //height: Dimensions.get('window').height * 0.4,
    },
    phuongThucDatHang: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    sizeButton: {
        borderColor: 'lightgray',
        borderWidth: 1,
        alignItems: 'center',
        height: 25,
        width: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    //dropdown
    dropdown: {
        height: 30,
        width: 60,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 13,
    },
    selectedTextStyle: {
        fontSize: 13,
        color: 'black',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    itemTextStyle: {
        fontSize: 13,
        color: 'black',
    },
    quantityButton: {
        height: 30,
        width: 80,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        alignItems: 'center'
    },
});

export default GioHang;
