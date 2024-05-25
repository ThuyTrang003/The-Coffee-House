import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

function tickButton(tick: boolean): React.JSX.Element {
    if (tick == false)
        return (
            <Image source={require('../images/square.png')}
                style={{ height: 19, width: 19, marginRight: 7 }} />)
    else
        return (
            <Image source={require('../images/check-box.png')}
                style={{ height: 17, width: 17, marginRight: 7 }} />)
}

function GioHang(): React.JSX.Element {

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={[styles.fontWeight, { fontSize: 15, color: 'black', marginLeft: (screenWidth - 200) / 2 }]}>
                    Xác nhận đơn hàng</Text>
            </View>
            <View style={styles.categoryScreen}>
                <View style={styles.categoryTitle}>
                    <Text style={[styles.fontWeight, { fontSize: 15, color: 'black' }]}>
                        Sản phẩm đã chọn</Text>
                    <TouchableOpacity style={[styles.button1]}>
                        <Text style={{ fontSize: 12, color: 'black' }}>
                            + Thêm</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.categoryItem]}>
                    <Image source={require('../images/edit.png')}
                        style={{ height: 17, width: 17, marginRight: 7 }} />
                </View>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        margin: 20,
    },
    fontWeight: {
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    categoryScreen: {
        marginTop: 20,
        paddingTop: 10,
        backgroundColor: 'white',

    },
    categoryTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    button1: {
        backgroundColor: '#DBAFA0',
        borderRadius: 15,
        padding: 5,
    },
    categoryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    categoryInfor: {

    },
    footer: {
        flex: 6,
        backgroundColor: 'lightgray'
    }
});

export default GioHang;
